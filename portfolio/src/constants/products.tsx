import neuron from "public/images/neuron.png";
import neuron2 from "public/images/neuron2.png";
import opm from "public/images/opm.png";
import opm2 from "public/images/opm2.png";

export const products = [
  {
    href: "",
    title: "Neuron",
    description:
      "Your Intelligent Research Assistant",
    thumbnail: neuron,
    images: [neuron2, neuron],
    // stack: ["Nextjs", "Tailwindcss"],
    stack: ["Details"],
    slug: "neuron",
    content: (
      <div>
        <p>
        Neuron is an intelligent research assistant designed to help users stay informed and make informed decisions. It uses advanced algorithms to analyze data, extract insights, and provide personalized recommendations.
        </p>
        <p>
        Neuron is designed to be a user-friendly tool that can be used by anyone, regardless of their technical expertise. It uses natural language processing to understand user queries and provide relevant information.
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
