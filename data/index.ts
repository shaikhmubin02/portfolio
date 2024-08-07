export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SaaS Podcast Platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Wealthwise: A Banking App",
    des: "financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether. If you like it, give it a star!",
    img: "/p1.png",
    iconLists: ["/next.svg","/re.svg", "/tail.svg", "/ts.svg","/fm.svg"],
    link: "https://github.com/shaikhmubin02/banking-system",
  },
  {
    id: 2,
    title: "VirtualMeet",
    des: "Simplify your video conferencing experience with VM. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/shaikhmubin02/virtual-meet.git",
  },
  
];

export const testimonials = [
  {
    quote:
      "Mubin’s proficiency in artificial intelligence is truly commendable. His innovative approach and problem-solving skills were clearly evident when he led his team to victory in an inter-college hackathon. Mubin's ability to integrate AI solutions effectively demonstrates his deep understanding of the field. His dedication to staying ahead in AI, coupled with his strong technical acumen, makes him a standout professional in the industry.",
    name: "Joe",
    title: "SDE",
  },
  {
    quote:
      "Mubin’s expertise in machine learning is exceptional. His commitment to advancing his skills, particularly in high-frequency trading, sets him apart. Mubin’s approach to applying machine learning techniques is both insightful and practical. His analytical abilities and dedication to leveraging machine learning for complex problems make him a valuable asset to any team focused on innovative data-driven solutions.",
    name: "Shivam",
    title: "Collabarator at PDPU",
  },
  {
    quote:
      "Mubin excels as a full-stack developer, showcasing his expertise across various technologies. His work on developing a sophisticated banking system website using Next.js and TypeScript, along with integrating APIs like Plaid and Dwolla, highlights his comprehensive skill set. Mubin’s ability to seamlessly manage both front-end and back-end challenges, combined with his collaborative spirit, makes him a top choice for any full-stack development project.",
    name: "Sahil",
    title: "Student at GTU",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "BackdropLabs: Software Developer",
    desc: "Worked on an experimental AI assistant using the GPT-4 Vision API to enable real-time interactions through video streaming and voice communication, leveraging Next.js and Vercel AI.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/shaikhmubin02",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/shaikhmubin_02",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shaikhmubin/",
  },
];
