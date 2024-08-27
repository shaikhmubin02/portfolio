import syncflow from "public/images/syncflow.png";
import syncflow2 from "public/images/syncflow2.png";
import opm from "public/images/opm.png";
import opm2 from "public/images/opm2.png";

export const products = [
  {
    href: "",
    title: "SyncFlow",
    description:
      "Effortlessly connect and sync your apps globally. Manage everything from one platform, anywhere you are.",
    thumbnail: syncflow,
    images: [syncflow, syncflow2],
    // stack: ["Nextjs", "Tailwindcss"],
    stack: ["Details"],
    slug: "syncflow",
    content: (
      <div>
        <p>
          Experience the power of seamless integration with our cutting-edge platform. Designed to connect all your essential apps, 
          we bring everything you need into one intuitive interface. Whether you&apos;re managing projects, collaborating with your team, 
          or organizing your digital life, our platform ensures that your tools work together effortlessly. 
          With our focus on simplicity and efficiency, you&apos;ll spend less time switching between apps and more time getting things done.
        </p>
        <p>
          Our team of expert developers and designers is dedicated to creating a platform that meets your needs. 
          We leverage the latest technologies to provide a reliable and secure environment where your data flows smoothly between services. 
          We&apos;re passionate about innovation and committed to enhancing your productivity through smart, interconnected solutions. 
          Join us and discover a new way to work, where all your favorite tools come together in perfect harmony.
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
