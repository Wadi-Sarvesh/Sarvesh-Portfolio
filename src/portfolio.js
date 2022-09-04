/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "Sarvesh Wadi",
  title: "Hi all, I'm Sarvesh",
  subTitle: emoji(
    "Passionate Full Stack Software Developer 🚀 Experienced in building Web and Mobile applications with Android-Native / Springboot / J2EE and some other cool libraries and frameworks in Python / C++."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12D8CRs1yec4Llqde04yfEC41EEgIicZx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Wadi-Sarvesh",
  linkedin: "https://www.linkedin.com/in/sarvesh-wadi-546531186",
  gmail: "wadisarvesh33@gmail.com",
  instagram: "https://www.instagram.com/sarvesh_wadi_/",
  medium: "https://medium.com/@wadisarvesh33",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE DEVELOPER WITH A DRIVE TO EXPLORE AND DEVELOP FULL STACK PROJECTS",
  skills: [
    emoji(
      "⚡  Android, Java, J2EE, Spring boot developer experienced in multi domain fields with more than 20+ projects exploring technologies"
    ),
    emoji("⚡ Progressive Python Projects in ML, Computer Vision, Web scraping"),
    emoji(
      "⚡ Worked with fields such as Blockchain Development, Cyber Security, Data Analysis, Android, IOT "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Springboot",
      fontAwesomeClassname: " fa fa-leaf"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Cyber Security",
      fontAwesomeClassname: "fas fa-user-secret"
    },
    {
      skillName:"Data Analysis",
      fontAwesomeClassname: "fa fa-table"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
    {
      skillName: "JDBC",
      fontAwesomeClassname: "fa fa-server"
    },
    {
      skillName: "ML",
      fontAwesomeClassname: "fa fa-cogs"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

        {
      skillName: "Image Processing",
      fontAwesomeClassname: "fa fa-camera-retro"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vishwakarma Institute of Technology, Pune",
      logo: require("./assets/images/VIT.jpg"),
      subHeader: "Bachelor of Technology in Electronics",
      duration: "August 2018 - June 2022",
      desc: "Ranked top 10% in the program. Took courses about Data Structures & Algorithms, Python/C++, Computer Vision, Cloud Computing, Natural Language Processing, ...",
      descBullets: [
        "CGPA: 8.86",
        "Core Android Developer at TRF Robosoft",
        "Published a Research Paper : Production of Fungicide using Papaya Leaves at International Journal of Scientific Research and Review(IJSRR)"
      ]
    },
    {
      schoolName: "MP Deo Dharampeth College, Nagpur",
      logo: require("./assets/images/MPdeo.jpg"),
      subHeader: "Secondary Education/ High Scool",
      duration: "July 2016 - May 2018",
      desc: "Passed with 91% score in HSC (Higher Secondary Certificate)",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java/Python Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL/DBMS",
      progressPercentage: "75%"
    },
    {
      Stack: "Springboot/J2EE",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cyber Security Data Analyst",
      company: "Snowflake Inc.",
      companylogo: require("./assets/images/Snowflake.png"),
      date: "Jan 2022 – July 2022",
      desc: "Data Analysis of Organization's Security Data",
      descBullets: [
        "Writing Advanced SQL queries for visualization of data through dashboard development",
        "Enhancing and maintaining CIS dashboards and analyzing security data"
        
      ]
    },
    {
      role: "Software/Android Developer",
      company: "TRF Robosoft",
      date: "June 2019 – May 2021",
      companylogo: require("./assets/images/TRF.jpg"),
      desc: "Software Development Community",
      descBullets: [
      "Worked as Software/Android Developer",
      "Mentoring at Android Workshops, Guiding students on Android Projects",
      "Skills: Data Structures, Android/Web development, Machine Learning, Image processing, AR/VR, etc"

      
      ]
    },
    {
      role: "Project Intern",
      company: "Aayudea Technologies",
      companylogo: require("./assets/images/Aayudea.jpg"),
      date: "Feb 2021 – May 2021",
      desc: "Project intern for an IOT-based project. ",
      descBullets: ["Key tasks were Prototype development, Product life-cycle management, Testing, Designing System Architecture, and Interfacing Modules with Embedded C/C++."]
    }
  ]
};
const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/Google meet.png"),
      projectName: "Self Attendance Bot",
      projectDesc: "A Fully Automated python program which opens meet link, automatically joins lecture according to college schedule and marks present through playing a recorded voice on mic!",
      footerLink: [
        {
          name: "Checkout the Demo!",
          url: "https://www.linkedin.com/posts/sarvesh-wadi-546531186_programming-python-coding-activity-6721649520037371904-FhGh"
        },
        {
          name: "Watch Tutorial",
          url: "https://medium.com/analytics-vidhya/google-meet-self-attendance-bot-sarvesh-wadi-a62978bb06f6"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/P2P App.png"),
      projectName: "Peer to Peer Ride-Sharing using Blockchain App",
      projectDesc:
      ["A ridesharing service-providing app like Uber but decentralized!\n",
      "Blockchain based android app connecting drivers and users.\n",
      "Users can request for a shared ride with others hassle free though the app.\n",
      ]
      ,
      
 
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Wadi-Sarvesh/P2P-Ridesharing-App-using-Blockchain"
        }
      ]
    },
    {
      image: require("./assets/images/SafeRoute.jpg"),
      projectName: "SafeRoute Application",
      projectDesc:
      [
      "App that maps covid-19 patients in your city and\n",
      "shows containment zones with red hotspots on the map fragment.\n",
      "Finds a safer commute avoiding these containment zones\n",
      ]
      ,
      
 
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Wadi-Sarvesh/SafeRoute"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  projects: [
    {
      image: require("./assets/images/Google meet.png"),
      projectName: "Self Attendance Bot",
      projectDesc: "A Fully Automated python program which opens meet link, automatically joins lecture according to college schedule and marks present through playing a recorded voice on mic!",
      footerLink: [
        {
          name: "Checkout the Demo!",
          url: "https://www.linkedin.com/posts/sarvesh-wadi-546531186_programming-python-coding-activity-6721649520037371904-FhGh"
        },
        {
          name: "Watch Tutorial",
          url: "https://medium.com/analytics-vidhya/google-meet-self-attendance-bot-sarvesh-wadi-a62978bb06f6"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/P2P App.png"),
      projectName: "Peer to Peer Ride-Sharing using Blockchain App",
      projectDesc:
      ["A ridesharing service-providing app like Uber but decentralized!\n",
      "Blockchain based android app connecting drivers and users.\n",
      "Users can request for a shared ride with others hassle free though the app.\n",
      ]
      ,
      
 
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Wadi-Sarvesh/P2P-Ridesharing-App-using-Blockchain"
        }
      ]
    },
    {
      image: require("./assets/images/SafeRoute.jpg"),
      projectName: "SafeRoute Application",
      projectDesc:
      [
      "App that maps covid-19 patients in your city and\n",
      "shows containment zones with red hotspots on the map fragment.\n",
      "Finds a safer commute avoiding these containment zones\n",
      ]
      ,
      
 
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Wadi-Sarvesh/SafeRoute"
        }
      ]
    }
  ],
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true

  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Awards, Hackathons and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "1st prize in Product Based Hackathon at Vishwatatva 2020, VIT pune. ",
      subtitle:
        "Automatic Attendance Google Bot won the first prize in a Product Based Hackathon",
      image: require("./assets/images/trophy.png"),
    
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1hERsgMvINXIjUG1Ql2LIV4aFoiG6QiOg/view?usp=sharing"
        }
      ]
    },
    {
      title: "Finalist in Atmanirbharata Covid-19 Start-up competition, AISSMS.",
      subtitle:
        "Developed a Covid-19 Local Tracking Application that displays containment zones with red hotspots on the map and finds a safer commute avoiding these containment zones",
      image: require("./assets/images/hackathon.jpg"),
      imageAlt: "Atmanirbharata Covid-19 Start-up competition",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/15s6pUuaJFzC6CYrjPJ4r6yCeTvDrDOLL/view?usp=sharing"
        }
      ]
    },

    {
      title: "Mentorship in Android Workshop at TRF Robosoft",
      subtitle: "Mentored students for an Android Learning Workshop where we taught basics of Java and developed 4 full stack apps",
      
     image: require("./assets/images/TRF.jpg"),
      footerLink: [
        {name: "Certificate", url: "https://drive.google.com/file/d/1JYS4O2g9I8xstlAzy_56EnlqCmMFDZRR/view?usp=sharing"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/analytics-vidhya/google-meet-self-attendance-bot-sarvesh-wadi-a62978bb06f6",
      title: "Google Meet Self Attendance Bot ~Sarvesh Wadi",
      description:
        "Tutorial on a fully automated program which opens meet link, automatically joins lecture and marks present through playing a recorded voice on mic!"
    },
    {
      url: "https://emergingmemorytechnologies.blogspot.com/2021/01/dna-storage-scientists-upload-galloping.html",
      title: "DNA Storage",
      description:
        "Scientists upload a galloping horse GIF into bacteria with Crispr DNA could be a robust storage system for data, but never before have researchers stored information in a live organism."
    },
    {
      url: "https://malhar10000.wixsite.com/languagemodels/post/language-models-types-and-applications",
      title: "Language Models: Types and Applications",
      description: "A blog about Types of Language Models, how they work and their applications in real-world"
    },
    {
      url:"https://applicationofconvolution.blogspot.com/2020/04/application-of-convolution-incomputer.html",
      title: "Applications of Convolution in Computer Vision",
      description: "A blog discussing applications of CNN, introducing Image processing as an application"
    },
    {
      url: "https://devarshitalewar18.wixsite.com/pubsub/post/all-about-cloud-pub-sub",
      title: "All about Cloud Pub/Sub",
      description: "A blog discussing what is Cloud Pub/Sub and all about its key characteristics"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "wadisarvesh33@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  bigProjects,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
