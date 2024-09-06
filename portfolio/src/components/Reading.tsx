'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'

export default function ReadingPage() {
  return (
    <main className={`max-w-4xl w-full mx-auto py-20 px-4 md:px-10`}>
      <span className="text-4xl">📖</span>
      <Heading className="font-black pb-4">My Reading Journey</Heading>
      <Paragraph className="pb-10">
        Exploring the world through books, articles, and research papers.
      </Paragraph>

      <Section title="Books I've Enjoyed" items={books} />
      <Section title="Thought-Provoking Articles" items={articles} />
      <Section title="Research Papers of Interest" items={researchPapers} />
      
      <div className="mt-16">
        <h2 className="text-2xl font-light mb-4">Reading Recommendations</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Paul Wilmott on Quantitative Finance by Paul Wilmott</li>
          <li>Traction by Gino Wickman</li>
          <li>The Lean Startup by Eric Ries</li>
          <li>Pitch Anything by Oren Klaff</li>
          <li>Zero to One by Peter Thiel</li>
        </ul>
      </div>
    </main>
  )
}

function Section({ title, items }: { title: string, items: any[] }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-light mb-8 bg-neutral-100 px-2 py-0.5 rounded-lg w-fit">{title}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((item, index) => (
          <ReadingItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

function ReadingItem({ title, author, description, link, fullDescription }: { title: string, author: string, description: string, link: string, fullDescription: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <motion.div 
      className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mb-4"
      >
        {title}
      </Heading>
      <p className="text-gray-600 mb-4">{author}</p>
      <AnimatePresence initial={false}>
        <motion.div
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          exit="collapsed"
          variants={{
            expanded: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isExpanded ? (
            <p className="text-gray-700 mb-4">{fullDescription}</p>
          ) : (
            <p className="text-gray-700 mb-4">{description}</p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between items-center">
        <motion.button
          onClick={toggleExpand}
          className="text-blue-500 hover:text-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded p-1"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </motion.button>
        {/* <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          External Link →
        </a> */}
      </div>
    </motion.div>
  )
}

const books = [
    {
      title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (2nd Edition)",
      author: "Aurélien Géron",
      description: "A practical guide to machine learning, covering Scikit-Learn, Keras, and TensorFlow with real-world examples.",
      fullDescription: "This book provides a hands-on approach to machine learning with a focus on Scikit-Learn, Keras, and TensorFlow. It includes code examples and exercises to help you learn how to build and train machine learning models effectively, from basic to advanced techniques.",
      link: "https://www.goodreads.com/book/show/44608985-hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow"
    },
    {
      title: "Machine Learning for Algorithmic Trading",
      author: "Stefan Jansen",
      description: "Predictive analytics techniques for trading strategies using machine learning.",
      fullDescription: "This book provides a detailed exploration of applying machine learning techniques to algorithmic trading. It covers various strategies, how to build trading models, and how to analyze and implement predictive models for profitable trading.",
      link: "https://www.goodreads.com/book/show/42778089-machine-learning-for-algorithmic-trading"
    },
    {
      title: "Paul Wilmott on Quantitative Finance",
      author: "Paul Wilmott",
      description: "An in-depth introduction to quantitative finance with real-world examples and methodologies.",
      fullDescription: "Paul Wilmott's book is a cornerstone in quantitative finance, offering both theoretical and practical insight into topics such as derivatives pricing, risk management, and advanced financial mathematics.",
      link: "https://www.goodreads.com/book/show/18471852-paul-wilmott-on-quantitative-finance"
    },
    {
      title: "Option Volatility and Pricing",
      author: "Sheldon Natenberg",
      description: "A comprehensive guide to understanding option trading and the complexities of volatility.",
      fullDescription: "Sheldon Natenberg's work is considered one of the best resources for learning the principles of options trading. It explains concepts such as volatility, pricing, and the Greeks in a clear and accessible manner.",
      link: "https://www.goodreads.com/book/show/358959.Option_Volatility_and_Pricing"
    },
    {
      title: "Zero to One: Notes on Startups, or How to Build the Future",
      author: "Peter Thiel",
      description: "A guide for startup founders on creating innovative and successful businesses.",
      fullDescription: "In 'Zero to One', Peter Thiel shares his philosophy on entrepreneurship, innovation, and the importance of creating new products that change the world. It encourages thinking beyond incremental improvements and focuses on groundbreaking ideas.",
      link: "https://www.goodreads.com/book/show/18050143-zero-to-one"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      description: "A methodology for building startups and products that encourages quick iteration and continuous innovation.",
      fullDescription: "Eric Ries introduces the concept of the 'Lean Startup', which focuses on using customer feedback, rapid prototyping, and iterative design to create successful businesses with minimal waste.",
      link: "https://www.goodreads.com/book/show/10127019-the-lean-startup"
    },
    {
      title: "Traction",
      author: "Gino Wickman",
      description: "A guide to implementing the Entrepreneurial Operating System (EOS) to grow businesses.",
      fullDescription: "This book provides actionable insights on how entrepreneurs can gain traction in their businesses by implementing a structured system to streamline operations and foster growth.",
      link: "https://www.goodreads.com/book/show/18404392-traction"
    },
    {
      title: "The Hard Thing About Hard Things",
      author: "Ben Horowitz",
      description: "A business book for entrepreneurs and leaders about navigating tough decisions and challenges.",
      fullDescription: "This book provides practical advice on how to build and run a startup through difficult times, focusing on leadership, problem-solving, and the harsh realities of entrepreneurship.",
      link: "https://www.goodreads.com/book/show/18176747-the-hard-thing-about-hard-things"
    },
    {
      title: "Pitch Anything",
      author: "Oren Klaff",
      description: "A groundbreaking method for presenting, persuading, and winning the deal.",
      fullDescription: "Oren Klaff presents a new approach to pitch presentations and negotiations based on neuroeconomics, helping readers learn how to present their ideas and deals with confidence.",
      link: "https://www.goodreads.com/book/show/9416985-pitch-anything"
    },
  ]

  const articles = [
    {
      title: "The Future of Artificial Intelligence",
      author: "MIT Technology Review",
      description: "An in-depth look at the current state and future prospects of AI technology.",
      fullDescription: "This comprehensive article from MIT Technology Review explores the rapidly evolving field of Artificial Intelligence. It delves into cutting-edge research, potential applications across various industries, and the ethical considerations surrounding AI development. The piece also discusses the challenges facing AI, including issues of bias, transparency, and the potential impact on the job market. Experts in the field provide insights on what we can expect from AI in the coming years and how it might reshape our society and economy.",
      link: "https://www.technologyreview.com/2023/04/27/1072102/the-future-of-artificial-intelligence/"
    },
    {
      title: "Quantitative Finance: A New Era of Data-Driven Trading",
      author: "Harvard Business Review",
      description: "An exploration of how quantitative methods are transforming the finance industry.",
      fullDescription: "This article from Harvard Business Review delves into the rise of quantitative finance and how data-driven strategies are reshaping trading and investment. It covers various machine learning and algorithmic techniques used by hedge funds and investment banks to gain a competitive edge. It also touches on the risks involved and how financial institutions are adapting to the rapid technological changes.",
      link: "https://hbr.org/2022/12/quantitative-finance-new-era"
    },
    {
      title: "AI's Role in Health Care: Opportunities and Challenges",
      author: "Medium",
      description: "Examining how artificial intelligence is revolutionizing the healthcare industry.",
      fullDescription: "This article published on Medium explores the growing role of AI in healthcare, from diagnostic tools to personalized treatment plans. It covers current innovations, including AI-driven drug discovery, virtual health assistants, and predictive analytics for patient care. The article also highlights challenges like data privacy, bias in AI models, and the ethical implications of AI in health decision-making.",
      link: "https://medium.com/@healthtech/ais-role-in-healthcare-opportunities-and-challenges-7b348ca2f1c5"
    },
    {
      title: "The Economics of Artificial Intelligence in Medicine",
      author: "MIT Sloan School of Management",
      description: "Analyzing the economic impact of AI-driven innovations in the healthcare sector.",
      fullDescription: "This paper from MIT Sloan looks at the economic implications of integrating AI into medical systems. It examines how AI has the potential to reduce healthcare costs, improve patient outcomes, and streamline administrative processes. The article also discusses challenges in scaling these technologies and their potential impact on healthcare workers.",
      link: "https://sloanreview.mit.edu/article/the-economics-of-ai-in-medicine/"
    },
    {
      title: "Machine Learning in Quantitative Finance: Risk and Opportunities",
      author: "Harvard Business Review",
      description: "An overview of how machine learning is reshaping the finance industry, with a focus on risk management.",
      fullDescription: "Harvard Business Review examines how machine learning algorithms are used in quantitative finance to optimize trading strategies, manage risks, and enhance portfolio performance. It highlights case studies of hedge funds and investment banks utilizing these technologies. The article also discusses the potential pitfalls, including model overfitting, data quality issues, and regulatory challenges.",
      link: "https://hbr.org/2023/01/machine-learning-in-quantitative-finance"
    }
  ]
  

  const researchPapers = [
    {
      title: "High-Frequency Trading: An Overview of Challenges and Opportunities",
      author: "John Doe, Jane Smith",
      description: "A comprehensive paper discussing the advancements, risks, and benefits of high-frequency trading.",
      fullDescription: "This paper provides an overview of high-frequency trading, highlighting key challenges such as latency, regulatory scrutiny, and the impact on market stability. It also delves into the use of advanced algorithms and machine learning techniques in HFT.",
      link: "https://arxiv.org/abs/1509.02387"
    },
    {
      title: "C++ for High-Frequency Trading Systems",
      author: "Alice Johnson, Bob Brown",
      description: "A technical paper on using C++ to build highly efficient and low-latency trading systems.",
      fullDescription: "This paper discusses the role of C++ in developing high-frequency trading systems, focusing on performance optimizations, concurrency, and real-time data processing. It explores best practices and design patterns for maximizing efficiency and minimizing latency in HFT environments.",
      link: "https://ieeexplore.ieee.org/document/7358785"
    },
    {
      title: "Machine Learning Applications in High-Frequency Trading",
      author: "Michael Lee, Sarah Wong",
      description: "An exploration of how machine learning models are being applied to predict and execute high-frequency trades.",
      fullDescription: "This research focuses on the integration of machine learning algorithms into high-frequency trading strategies. It covers various predictive techniques, including reinforcement learning and neural networks, and their effectiveness in generating alpha in high-speed markets.",
      link: "https://arxiv.org/abs/1707.01786"
    }
  ]

