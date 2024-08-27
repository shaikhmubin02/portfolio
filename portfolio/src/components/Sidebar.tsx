"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6  z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              {/* <Badge href="/resume" text="Read Resume" /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const [loadingHref, setLoadingHref] = useState<string | null>(null);

  const isActive = (href: string) => pathname === href;

  const handleClick = (href: string) => {
    if (isMobile()) {
      setOpen(false);
    }
    setLoadingHref(href);
    // Simulate loading delay (remove this in production)
    setTimeout(() => setLoadingHref(null), 500);
  };

  const renderLink = (link: Navlink, isNavLink: boolean = true) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => handleClick(link.href)}
      className={twMerge(
        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
        isNavLink && isActive(link.href) && "bg-white shadow-lg text-primary"
      )}
    >
      {loadingHref === link.href ? (
        <div className="h-4 w-4 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <link.icon
          className={twMerge(
            "h-4 w-4 flex-shrink-0",
            isNavLink && isActive(link.href) && "text-sky-500"
          )}
        />
      )}
      <span>{link.label}</span>
    </Link>
  );

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => renderLink(link))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => renderLink(link, false))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="/images/avatar.jpg"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Mubin</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};
