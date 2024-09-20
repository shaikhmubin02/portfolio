'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconChevronDown, IconChevronLeft, IconChevronUp } from '@tabler/icons-react'
import { Heading } from '@/components/Heading'

type Thought = {
  id: string
  title: string
  content: string
  date: string
}

const thoughts: Thought[] = [
  {
    id: '1',
    title: "Building a Startup: The Rollercoaster of Creation",
    date: "August 28, 2024",
    content: `Starting a business is one of the most exhilarating and challenging things I’ve ever done. There’s something truly special about taking an idea from a random thought in your head to a product you can hold in your hands or see people use. Neuron, my current project, started from a simple concept: what if we could combine the power of multiple AI models into one seamless search engine that delivers smarter, synthesized answers? It sounds straightforward, but building it has been anything but.

The startup journey is a constant balancing act between excitement and uncertainty. One day, you’re pumped up because you made a breakthrough in the code, or a new feature is finally working. The next day, you’re frustrated because a bug appears out of nowhere, or the UI doesn’t feel intuitive enough. But that’s the nature of startups—it’s about navigating through these highs and lows, staying persistent, and always learning.

What I’ve learned so far is that building a startup is 10% inspiration and 90% execution. Everyone has ideas, but turning those ideas into something real requires dedication, patience, and a willingness to pivot when things don’t go as planned. I’ve spent countless late nights refining Neuron, tackling everything from building the backend logic to improving the user experience, all while learning the complexities of the AI models I’m integrating.

One of the most rewarding parts of this journey is knowing that you’re building something that can potentially change the way people interact with technology. Developing a search engine that combines the strengths of multiple AIs to generate better insights, it’s the impact that drives me.

I’ve also come to appreciate the importance of staying adaptable. In the startup world, things never go exactly as you planned. You have to be willing to evolve—whether that’s in response to feedback, technological challenges, or market trends. I haven’t applied for funding yet because I want to make sure I’m building a product that’s truly valuable before taking that step. Right now, my focus is on creating a solid foundation and testing the waters with early users.

Through all the coding, sleepless nights, and endless iterations, I’ve come to realize that starting a company is about solving real problems. If you can solve a problem that people care about, you’re halfway there. The rest is about execution, persistence, and learning as you go.

At the end of the day, the startup journey is unpredictable, but that’s what makes it so exciting. I don’t know exactly where Neuron will end up, but I do know that I’ll keep pushing forward, learning, and adapting until I get there.`
  },
  {
    id: '2',
    title: "The Joy of Gaming",
    date: " July 19, 2024",
    content: `Games are more than just a fun way to pass the time—they can also play a big role in our lives. Whether you're into video games, board games, or sports, they offer a lot more than just entertainment.

Video games, for instance, are not only about escaping reality but also about exploring new worlds and challenges. They can help improve problem-solving skills, hand-eye coordination, and even foster creativity. Plus, many games have rich stories and complex characters that can be as engaging as a good book or movie.

Board games are a great way to bond with friends and family. They encourage face-to-face interaction, strategic thinking, and teamwork. Games like Settlers of Catan or Codenames can make for memorable game nights filled with laughter and friendly competition.

Sports and physical games, on the other hand, help us stay active and healthy. They teach valuable lessons about teamwork, discipline, and resilience. Whether you're playing soccer, basketball, or even a casual game of catch, the physical activity and social interaction are beneficial.

Games also offer a way to relax and de-stress. They provide an escape from daily pressures and can be a great way to unwind after a long day.

Overall, games enrich our lives in many ways. They offer opportunities for learning, socializing, and relaxation. So next time you pick up a controller, gather around a board game, or head out for a game of pickup basketball, remember that you're doing more than just having fun—you're engaging in something that can have a positive impact on your life.`
  },
  {
    id: '3',
    title: "Mars: Humanity’s Next Great Adventure",
    date: "July 4, 2024",
    content: `Mars has always held a special place in my imagination. The idea of humans setting foot on another planet feels like the ultimate expression of our desire to explore the unknown. It’s more than just science fiction now—it’s becoming a reality, thanks to advancements in space technology and visionaries like Elon Musk and SpaceX. Musk’s dream of making humanity a multi-planetary species isn’t just ambitious—it’s essential, especially with all the challenges we face on Earth. The idea of taking a Starship and flying it to another world is mind-blowing, but what’s even more incredible is that we might actually see it happen in our lifetime.
    
SpaceX has already achieved so much, with reusable rockets like the Falcon 9 dramatically cutting the cost of space travel, and now the Starship project aims to take that to the next level. Starship isn’t just a bigger rocket; it’s designed to be the vehicle that takes us to Mars. Imagine what that means: in just a few decades, we could see permanent human settlements on another planet. A self-sustaining colony on Mars isn’t some far-off dream—it’s a real possibility that SpaceX is actively working toward.

What fascinates me most about the idea of colonizing Mars is how it challenges us to think beyond our current limits. Establishing a human presence on Mars isn’t just about getting there. It’s about creating new technologies, new ways of living, and solving problems we’ve never encountered before. What would agriculture look like on a planet with no atmosphere? How would we create energy in such an environment? How would we build cities in a place where nothing grows naturally?

Elon Musk often talks about making life multi-planetary as a way to safeguard humanity’s future. The idea of having a “backup” planet is compelling, but for me, Mars represents something even more. It’s the next frontier of human ingenuity—a place where we’ll have to rethink everything we know about survival and progress. Imagine what we’ll learn about ourselves as we push the boundaries of what’s possible, not just in technology but in human collaboration, innovation, and endurance.

There’s something poetic about reaching for Mars. We’ve looked up at the stars for centuries, dreaming about what’s out there. And now, we’re finally at the stage where we can start answering those questions. It won’t be easy, and there will be countless challenges along the way, but that’s what makes it exciting. It’s like the early days of aviation or the first moon landing. History is being written as we speak, and the first humans on Mars will leave footprints that represent the collective effort of an entire species.

For me, following SpaceX’s progress with Starship is like watching the birth of a new era. The risks are huge, but the rewards are unimaginable. Mars is not just about science, technology, or survival—it’s about the human spirit of exploration and our drive to push beyond the boundaries of what we know. It’s about challenging ourselves to dream bigger and work harder for something greater.

I truly believe that in the coming decades, we’ll look back at this moment and realize that we stood at the threshold of one of the most important steps in human history. Colonizing Mars will change everything—our understanding of the universe, our place in it, and our future as a species.`
  },
  {
    id: '4',
    title: "High-Frequency Trading (HFT): The Perfect Intersection of Speed and Strategy",
    date: "June 25, 2024",
    content: `High-frequency trading is where my love for coding meets my fascination with finance. The idea that a few milliseconds can make the difference between success and failure is mind-blowing.
    
In HFT, everything has to be optimized for speed and precision—there’s no room for error. Writing algorithms for HFT has pushed me to think differently about code, to focus on efficiency and accuracy in ways I hadn't before. 
    
It's not just about writing a program; it's about designing systems that can react in real-time to market changes, leveraging both AI and advanced data analytics. For me, HFT represents the perfect challenge—a space where technology, finance, and strategy all come together in the most intense way possible.`

  },
  
]

export default function ThoughtsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <main className={`max-w-4xl w-full mx-auto py-20 px-4 md:px-10`}>
      <span className="text-4xl">💡</span>
      <Heading className="font-black pb-4">My Thoughts</Heading>
        
      <div className="space-y-8">
        {thoughts.map((thought) => (
          <div key={thought.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
            <Heading
              as="h2"
              className="font-black text-lg md:text-lg lg:text-lg mb-4"
            >
              {thought.title}
            </Heading>
              <p className="mt-1 text-sm text-gray-500">{thought.date}</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <p className="text-gray-700 whitespace-pre-wrap">
                {expandedId === thought.id
                  ? thought.content
                  : `${thought.content.split('\n')[0].substring(0, 150)}...`}
              </p>
              <button
                onClick={() => toggleExpand(thought.id)}
                className="mt-3 flex items-center text-sm font-medium text-blue-500 hover:text-blue-800"
              >
                {expandedId === thought.id ? (
                  <>
                    Read less
                    <IconChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read more
                    <IconChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}