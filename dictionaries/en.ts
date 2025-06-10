export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    work: "Work",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, my name is",
    name: "John Doe",
    title: "I build things for the web.",
    description:
      "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
    cta: "Get In Touch",
  },
  about: {
    title: "About Me",
    p1: "Hello! My name is John and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
    p2: "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
    p3: "Here are a few technologies I've been working with recently:",
    technologies: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  experience: {
    title: "Where I've Worked",
    positions: [
      {
        company: "Upstatement",
        title: "Lead Engineer",
        period: "May 2018 - Present",
        description: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects",
          "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
          "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
      },
      {
        company: "Apple",
        title: "UI Engineer Co-op",
        period: "July - December 2017",
        description: [
          "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
          "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
          "Architected and implemented the front-end of Apple Music's embeddable web player widget",
        ],
      },
      {
        company: "Mullen Lowe",
        title: "Creative Technologist Co-op",
        period: "July - December 2016",
        description: [
          "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
          "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
          "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    schools: [
      {
        school: "Northeastern University",
        degree: "Bachelor of Science in Computer Science",
        period: "2014 - 2018",
        gpa: "3.8/4.0",
        coursework: [
          "Data Structures and Algorithms",
          "Object-Oriented Design",
          "Database Design",
          "Computer Systems",
          "Software Development",
          "Web Development",
        ],
        activities: [
          "Teaching Assistant for Fundamentals of Computer Science",
          "Member of the Computer Science Student Association",
          "Participated in ACM Programming Contests",
        ],
      },
      {
        school: "Online Coursework",
        degree: "Continuous Learning",
        period: "2018 - Present",
        coursework: [
          "Advanced React Patterns",
          "TypeScript Deep Dive",
          "System Design",
          "Cloud Architecture",
          "Machine Learning Fundamentals",
        ],
        activities: [
          "Completed 50+ technical courses on various platforms",
          "Active contributor to open source projects",
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
        title: "Spotify Profile",
        image: "/images/project1.jpg",
        description:
          "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
      },
      {
        title: "Halcyon Theme",
        image: "/images/project2.jpg",
        description:
          "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      },
      {
        title: "Course Source",
        image: "/images/project3.jpg",
        description:
          "A web app built with the NERDS stack for my fellow Northeastern students to browse and leave reviews for courses. Features include user authentication, a review system, and more.",
        tech: ["Node.js", "Express", "React", "PostgreSQL"],
      },
    ],
  },
  contact: {
    preTitle: "What's Next?",
    title: "Get In Touch",
    description:
      "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    cta: "Say Hello",
  },
  languages: {
    en: "English",
    es: "Spanish",
    tr: "Turkish",
    ru: "Russian",
  },
}
