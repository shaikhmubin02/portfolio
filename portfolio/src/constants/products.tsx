import syncflowhg from "public/images/syncflowhq.png";
import syncflowhq2 from "public/images/syncflowhq2.png";
import opm from "public/images/opm.png";
import opm2 from "public/images/opm2.png";

export const products = [
  {
    href: "",
    title: "SyncFlow",
    description:
      "Effortlessly Connecting Your Apps Globally",
    thumbnail: syncflowhg,
    images: [syncflowhg, syncflowhq2],
    // stack: ["Nextjs", "Tailwindcss"],
    stack: ["Details"],
    slug: "syncflow",
    content: (
      <div>
        <p>
        I&apos;m currently developing SyncFlow, a platform designed to connect all your essential apps in one place, enabling seamless integration and management. SyncFlow will allow you to manage projects, collaborate with your team, and organize your digital life without the hassle of constantly switching between applications. With an intuitive interface, the platform will simplify workflows, helping users focus on what matters most—getting things done.
        </p>
        <p>
        As the developer and creator, I&apos;m working with edge technologies to ensure reliable, secure, and efficient data synchronization across services. Although still in development, SyncFlow reflects my passion for innovation and enhancing productivity through a smart, interconnected ecosystem.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://optionlab.vercel.app",
    title: "Option Pricing Models",
    description:
      "Option pricing models are mathematical models used to calculate the theoretical value of options.",
    thumbnail: opm,
    images: [opm, opm2],
    // stack: ["Nextjs", "Tailwindcss"],
    stack: ["Details"],
    slug: "opm",
    content: (
      <div>
        <p>
          Option pricing models are mathematical models used to calculate the theoretical value of options. 
          These models help traders and investors determine fair prices for options contracts, considering factors such as the underlying asset price, strike price, time to expiration, volatility, and interest rates.
        </p>
        <p>
          Option Pricing Models A comprehensive toolkit for implementing and analyzing option pricing models, 
          including: Black-Scholes model, Monte Carlo simulation, Binomial tree method
        </p>{" "}
      </div>
    ),
  },
];
