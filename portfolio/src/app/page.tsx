import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Don&apos;t Worry, This Blogs Isn&apos;t as Volatile as the Markets</Heading>
      <Paragraph className="max-w-xl mt-4">
        Hi, I&apos;m Mubin. A soon-to-be graduate, quant enthusiast, and a really good at breaking things, occasionally fixing them, and somehow learning along the way.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        With a lot of trial and error (and a sprinkle of luck), I&apos;ve managed to piece together my understanding of markets. —just countless hours building models that are weirdly passionate about losing money, debugging code at 3 a.m., and asking the eternal question: 
        <span className='italic bg-gradient-to-r from-orange-100 to-orange-200 px-1 rounded'>Why is my model predicting complete nonsense?</span>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;ve spent more time <span className='bg-gradient-to-br from-gray-50 to-gray-100 px-1 rounded'>staring at my code</span>, debugging algorithms, and Googling “why does my backtest always fail” than I care to admit—all so you don&apos;t have to (but honestly, you probably should).
      </Paragraph>

      <Image src='/pp.png' alt='penguin' width={500} height={500} />
      
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      {/* <TechStack /> */}
    </Container>
  );
}
