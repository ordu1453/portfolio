export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    work: "Work",
    gallery: "Gallery",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, my name is",
    name: "Ali Ordu",
    title: "I connect hardware with intelligence.",
    description:
      "I design firmware for microcontrollers and work with real-time operating systems, hardware peripherals, and communication interfaces. I'm passionate about systems where code meets hardware — crafting intelligent embedded solutions that bring machines to life.",
    cta: "Get In Touch",
  },
  about: {
    title: "About Me",
    p1: "My name is Muzaffer Ali Ordu, and I specialize in building reliable, efficient, and intelligent embedded solutions that bridge the gap between hardware and software. I work at the intersection of low-level programming, microcontroller systems, real-time operating systems, and hardware interfaces.",
    p2: " ",
    p3: "Here are a few technologies I've been working with recently:",
    technologies: ["C/C++", "Python", "STM32", "Linux", "Altium Designer", "KiCAD", "MATLAB/Simulink", "TI", "Renesas", "Raspberry PI", "Keil uVision", "STM32 CubeIDE", "MathCAD", "Git"],
  },
  experience: {
    title: "Where I've Worked",
    positions: [
      {
        company: "Bauman Moscow State TU",
        title: "Programmer",
        period: "April - November 2024",
        description: [
          "Developed software for the vehicle control unit",
          "Designed the software architecture",
          "Implemented electric drive control algorithms",
          "Created schematics and routed PCBs",
          "Integrated safety and monitoring systems",
          "Followed industrial-grade reliability standards"
        ],
      },
      {
        company: "CPT TMH",
        title: "Lead Research Engineer",
        period: "November 2024 - Present",
        description: [
          "Develop control software for power converter systems using C/C++ on STM32, TI, Renesas, and NXP microcontrollers",
          "Apply MATLAB/Simulink for modeling, analysis, and optimization of converter control algorithms",
          "Design schematics and route control PCBs using Altium Designer and KiCad",
          "Build embedded Linux software for battery monitoring systems",
          "Implement device drivers and interface with peripherals via I2C, SPI, and CAN protocols"
        ],
      },
    ],
  },
  education: {
    title: "Education",
    schools: [
      {
        school: "Engineering Class",
        degree: "Kurchatov School",
        period: "2018 - 2021",
        coursework: [
          "Data Structures and Algorithms",
          "Object-Oriented Design",
          "Database Design",
          "Computer Systems",
          "Software Development",
          "Web Development",
        ],
        activities: [
          "Developed a digital notebook app in Swift for school use",
        ],
      },
      {
        school: "Electric Power and Electrical Engineering",
        degree: "Bauman Moscow State Techical University",
        period: "2021 - 2025",
        gpa: "Bachelor Degree",
        coursework: [
          "Electric Vehicle Design",
          "Control of Technical Systems",
          "Theory of Electric Vehicle Motion",
          "Methods of Calculation and Design of Electric Vehicles",
          "Onboard Information and Control Systems",
          "Electronics and Microprocessor Technology of Electric Vehicles",
          "Web Development",
          "Machine Learning Fundamentals",
        ],
        activities: [
          "Completed technical courses on various platforms",
          "Regular attendee of tech conferences and workshops",
        ],
      },
    ],
    courseworkTitle: "Relevant Coursework",
    activitiesTitle: "Activities & Achievements",
  },
  projects: {
    title: "Some Things I've Built",
    featuredProject: "Featured Project",
    projects: [
      {
        title: "Motor Inverter",
        images: ["/images/projects/vkr1.png", "/images/projects/vkr2.png", "/images/projects/vkr3.png", "/images/projects/vkr4.png", "/images/projects/vkr5.png", "/images/projects/vkr6.png"],
        description:
          "Developed a motor inverter for electric motor control. Designed the electrical schematic and PCB, selected components, and ensured proper signal integrity. Inparallel, I modeled and tested control algorithms in Matlab Simulink to validate functionality.This project demonstrated successful integration of both hardware and software elements in a motor control system.",
        tech: ["C/C++", "STM32", "TI", "Altium Designer", "MATLAB/Simulink", "Power Electronics", "Thermal calculation"],
      },
      {
        title: "Converter Control System",
        images: ["/images/projects/drv1.png", "/images/projects/drv2.png", "/images/projects/drv3.png", "/images/projects/drv4.png", "/images/projects/drv5.png"],
        description:
          "Designed a control system for a DC-DC converter. Developed the electrical schematic and PCB layout, ensuring reliable hardware performance. Implemented and validated control algorithms in Matlab Simulink, enabling thorough simulation and testing prior to hardware deployment. This project combined power electronics design with embedded control development.",
        tech: ["C/C++", "SWD", "PCB", "CAN", "I2C", "Fiber Optic Transmitters", "ADC/DAC", "MATLAB/Simulink", "Power Systems"],
        github: "https://github.com/ordu1453/CSS_TMH",
        demo: ""
      },
      {
        title: "STM32 Modules",
        images: [
          "/images/projects/g1.png",
          "/images/projects/g2.png",

        ],
        description:
          "Designed a modular PCB with an STM32 microcontroller for use in future embedded projects. The board features a modular architecture, allowing flexible integration with various peripherals and control schemes. It supports debugging, firmware updates, and multiple communication interfaces. This module serves as a reusable platform for rapid prototyping and development.",
        tech: ["STM32", "Modular design", "PCB", "Altium Designer"],
      },
    ],
  },
  contact: {
    preTitle: "What's Next?",
    title: "Get In Touch",
    description:
      "I'm open to collaboration and new engineering challenges. Feel free to reach out via email — I'd be happy to discuss your project.",
    cta: "Say Hello",
  },
  languages: {
    en: "English",
    tr: "Türkçe",
    ru: "Русский",
  },
}
