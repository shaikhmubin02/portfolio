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
    title: "Navigating Student Life and Academic Pursuits",
    date: "August 20, 2024",
    content: `Being a student is like juggling a lot of different balls at once. You've got your classes, assignments, and exams on one side, and then there's everything else like clubs, internships, and maybe even a part-time job on the other. It can be tough to balance it all, but there are some tricks that might help.

Start by making a solid plan for your studies. Use a planner or a calendar to keep track of deadlines and test dates. This way, you won't be caught off guard by last-minute cram sessions.

Don't forget to dive into extracurriculars too. Joining clubs or taking part in activities can make your college life more enjoyable and help you build skills that employers look for. Plus, you'll meet people who could become great friends or valuable contacts for your future career.

Managing your time well is key. Break your tasks into smaller steps and tackle them one by one. Setting goals, even small ones, can keep you motivated and on track.

And don't overlook the power of networking. Meet new people, attend events, and connect with professors and professionals in your field. These connections can lead to internships, job offers, or just some good advice.

Balancing everything isn't always easy, but with a bit of planning and effort, you can make the most of your college experience and set yourself up for success later on.`
  },
  {
    id: '2',
    title: "The Joy of Gaming",
    date: " July 10, 2024",
    content: `Games are more than just a fun way to pass the time—they can also play a big role in our lives. Whether you're into video games, board games, or sports, they offer a lot more than just entertainment.

Video games, for instance, are not only about escaping reality but also about exploring new worlds and challenges. They can help improve problem-solving skills, hand-eye coordination, and even foster creativity. Plus, many games have rich stories and complex characters that can be as engaging as a good book or movie.

Board games are a great way to bond with friends and family. They encourage face-to-face interaction, strategic thinking, and teamwork. Games like Settlers of Catan or Codenames can make for memorable game nights filled with laughter and friendly competition.

Sports and physical games, on the other hand, help us stay active and healthy. They teach valuable lessons about teamwork, discipline, and resilience. Whether you're playing soccer, basketball, or even a casual game of catch, the physical activity and social interaction are beneficial.

Games also offer a way to relax and de-stress. They provide an escape from daily pressures and can be a great way to unwind after a long day.

Overall, games enrich our lives in many ways. They offer opportunities for learning, socializing, and relaxation. So next time you pick up a controller, gather around a board game, or head out for a game of pickup basketball, remember that you're doing more than just having fun—you're engaging in something that can have a positive impact on your life.`
  },
  {
    id: '3',
    title: "The Journey of Building a Startup",
    date: "June 25, 2024",
    content: `Starting a business is a wild ride. When I first came up with the idea for my startup, it felt exciting but also a bit overwhelming. Turning that idea into a real business took a lot of hard work and persistence.

The first big step was figuring out what exactly my startup was going to do and how it would stand out from the competition. Once I had a clear vision, I worked on creating a product that people would actually want and need.

Raising money was another major hurdle. I had to pitch my idea to investors, manage budgets, and make sure everything was in place to keep things running smoothly.

As the startup began to grow, I had to learn how to handle new challenges like scaling up and managing a team. Each obstacle taught me something new and pushed me to improve.

Building a startup is tough but also incredibly rewarding. For anyone thinking about starting their own business, my journey shows that with determination and hard work, you can turn a simple idea into something successful.`
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