/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import ptuLogo from '../src/assets/images/ptu-logo.png'; // Adjust path as needed
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Levite Joseph Adams",
  title: "Hello everyone, It’s a pleasure to connect with you all.",
  subTitle: emoji(
    "A passionate Full Stack Developer  with hands-on experience building Web and Mobile applications using JavaScript, React.js, Node.js, React Native, Java, Spring Boot — and working across health tech, EMRs, biometrics, and more."
  ),  
  resumeLink:
    "https://drive.google.com/file/d/152akL5W-q2MXeT-WuVhxk7VjtCGDue9q/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/levite91",
  linkedin: "https://www.linkedin.com/in/levite-adams-574588230/",
  gmail: "leviteadams9@gmail.com",
  gitlab: "https://gitlab.com",
  // facebook: "https://www.facebook.com/levite Manya Adam",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "HEALTH TECH ENTHUSIAST & FULL STACK DEVELOPER TRANSFORMING IDEAS INTO IMPACTFUL SOLUTIONS",
  skills: [
    (" Design and develop scalable web applications for health informatics and data systems"),
    (" Integrate electronic medical records (EMR), biometric systems, and reporting tools"),
    (" Maintain and troubleshoot backend systems using Node.js, Python, and PostgreSQL"),
    (" Collaborate with health facilities to support data-driven decision-making"),
    (" Implement secure authentication and role-based access controls in web platforms"),
    (" Provide technical support, training, and deployment for software and hardware systems")
  ],



  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section
  schools: [
    {
      schoolName: "I. K. Gujral Punjab Technical University, Jalandhar (India)",
      logo: ptuLogo, // relative to `public/
      subHeader: "Bsc in Computer Applications",
      duration: "August 2014 - September 2017",
      desc: "Gained solid foundation in software development, networking, and database management.",
      descBullets: [
        "Completed project on health information systems and software engineering principles",
        "Participated in tech-focused workshops and departmental innovations"
      ]
    } 
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Health Informatics optimizer",
      company: "Johns Hopkins University (JHPIEGO) - RISE Project (PEPFAR USAID)",
      companylogo: require("./assets/images/jhpiego.jpg"), // Replace with actual logo path
      date: "August 2021 – October 2022",
      desc: "Health informatics support in developing and deploying electronic systems across health facilities in Taraba State.",
      descBullets: [
        "Designed, developed, and maintained EMRs (LAMIS, LAMISPlus) and biometric systems",
        "Built interactive Power BI dashboards to visualize performance metrics",
        "Led data migration projects and authored SOPs, manuals, and troubleshooting guides"
      ]
    },
    {
      role: "Health Management Information Support (HMIS)",
      company: "Heartland Alliance Global (HALG)",
      companylogo: require("./assets/images/heartland.png"),
      date: " 2023 –  2025",
      desc: "Data visualization and performance monitoring for improved project outcomes.",
      descBullets: [
        "Designed, developed, and maintained EMRs (LAMIS, LAMISPlus) and biometric systems",
        "Built interactive Power BI dashboards to visualize performance metrics",
        "Led data migration projects and authored SOPs, manuals, and troubleshooting guides",
        "Developed dashboards to support strategic decision-making",
        "Led team training sessions on digital health tools and data systems",
        "Ensured USAID/PEPFAR compliance through quality technical documentation"
      ]
    },
    
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Startups and Health Informatics Systems I Contributed to Technically",
  projects: [
    {
      image: require("./assets/images/jhpiego.jpg"), // Replace with your real image path
      projectName: "Case Management App",
      projectDesc:
        "A custom web-based tool designed to streamline HIV case management workflows, built for JHPIEGO under the RISE Project. I contributed to its backend development using Node.js and implemented biometric login features and data validation routines to ensure secure and efficient health service delivery.",
      footerLink: [
        {
          name: "Visit Website",
          // url: "https://casemanagement.rise.org" // Uncomment and replace if available
        }
      ]
    },
    {
      image: require("./assets/images/freelancing.png"), // Replace with your real image path
      projectName: "NGTechJobSite",
      projectDesc:
        "A job portal tailored for Nigerian tech talent. Designed and developed a scalable Node.js backend with MongoDB, integrated authentication using JWT, and implemented admin dashboard controls for posting and approving job listings. The platform aims to bridge the gap between tech job seekers and companies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/" // Replace with actual project URL if different
        }
      ]
    }
  ],
  display: true // Set to false to hide this section
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "M&E Fundamentals",
      subtitle: "Completed training on Monitoring & Evaluation Fundamentals.",
      image: require("./assets/images/M&E_logo.png"),
      imageAlt: "Global Health eLearning Logo",
      footerLink: []
    },
    {
      title: "Data Quality",
      subtitle: "Certification in Data Quality from Global Health eLearning Center.",
      image: require("./assets/images/Data-quality.png"),
      imageAlt: "Global Health eLearning Logo",
      footerLink: []
    },
    {
      title: "Gender-Based Violence (GBV)",
      subtitle: "Completed specialized training on GBV with JHPIEGO.",
      image: require("./assets/images/jhpiego.jpg"),
      imageAlt: "Jhpiego Logo",
      footerLink: []
    },
    {
      title: "Site Improvement Through Monitoring & Evaluation (SIMS)",
      subtitle: "PEPFAR-led training on site-level M&E practices.",
      image: require("./assets/images/heartland.png"),
      imageAlt: "PEPFAR Logo",
      footerLink: []
    },
    {
      title: "ArcGIS and GIS Training",
      subtitle: "Hands-on GIS and spatial analysis training from Data Lead Africa.",
      image: require("./assets/images/GIS-logo.png"),
      imageAlt: "GIS Logo",
      footerLink: []
    },
    {
      title: "Power BI for Data Visualization",
      subtitle: "Mastered Power BI for building dynamic dashboards and reports.",
      image: require("./assets/images/power-BI.png"),
      imageAlt: "Power BI Logo",
      footerLink: []
    },
    {
     title: "UI/UX Design",
     subtitle: "Training in user interface design, user experience research, and portfolio development..",
      image: require("./assets/images/ui-ux.png"),
    imageAlt: "",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE "
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: ["+2347068525946","+2348157493795"],
  email_address: "leviteadams9@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Levite J Adams", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
