  import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    work1,
    work2,
    work3,
    work4,
    work5
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Websites",
      icon: web,
    },
    {
      title: "Mobile Apps",
      icon: mobile,
    },
    {
      title: "UI/UX Design",
      icon: backend,
    },
    {
      title: "Digital Marketing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "LEARN FOR CARE",
      company_name: "",
      img: work5,
      link:"https://learnforcare.co.uk/",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "ORCAT boasts a team of experienced and versatile professionals with a solid background in web development, ensuring high-quality, reliable, and innovative solutions for every project."
      ],
    },
    {
      title: "ASTRA NOVA CAREERS",
      company_name: "",
      img: work1,
      link:"https://www.astranova.co.in/",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "We tailor our web development services to meet the unique needs and goals of each client, ensuring a personalized approach that delivers exactly what you need.",
      ],
    },
    {
      title: "VARF",
      company_name: "",
      icon: shopify,
      img: work4,
      link:"https://varf.vercel.app/",
      iconBg: "#383E56",
      date: "",
      points: [
        "Our team is proficient in the latest technologies and development frameworks, enabling us to create responsive, user-friendly, and visually appealing websites." 
      ],
    },
    {
      title: "ADEN DIGITAL SIGNANGE",
      company_name: "",
      icon: shopify,
      link:"https://www.adendigital.in/",
      img: work3,
      iconBg: "#383E56",
      date: "",
      points: [
        "We specialize in crafting digital experiences that go beyond just attractive designs. Our focus is on creating functional and aesthetically pleasing websites that engage users." 
      ],
    },
    {
      title: "ALUVA AGENCIES",
      company_name: "",
      icon: shopify,
      link:"https://www.aluvaagencies.com/",
      img: work2,
      iconBg: "#383E56",
      date: "",
      points: [
        "Our relationship with clients doesn’t end at launch. We provide ongoing support and maintenance services to keep your website running smoothly and up-to-date." 
      ],
    },
    // {
    //   title: "Competitive Pricing",
    //   company_name: "",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "",
    //   points: [
    //     "We offer competitive pricing for our services without compromising on quality, making professional web development accessible to businesses of all sizes." 
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    {
      testimonial:
        "Working with ORCAT was an absolute pleasure. Their team was professional, responsive, and delivered exceptional results. I would highly recommend ORCAT to anyone looking for reliable web development services",
      name: "Learn for Care",
      designation: "",
      company: "E-Learning Platform",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };