export const experience = [
	{
		jobTitle: "Team Lead for MIDAS Team",
		company: "Cal Poly SLO",
        dept: "Center for Teaching, Learning, and Technology",
		location: "San Luis Obispo, CA",
		duration: "June 2025 - Present",
		description: "Built and maintain an asynchronous onboarding workflow for a 21-person team while supporting daily \
            operations through file management, accessibility remediation, task organization, and team support.",
        highlights: [
            "Created a workflow for onboarding new team members that is asynchronous and self-guided.",
            "Maintained a team of 21 members by organizing tasks, managing files, and supporting team members.",
            "Remediated accessibility issues in team documentation and workflows to ensure compliance with accessibility standards."
        ],
        skills: ["Leadership", "Communication", "Project Management"]
	},
    {
        jobTitle: "WOW Student in Charge",
        company: "Cal Poly SLO",
        dept: "New Student and Transition Programs",
        location: "San Luis Obispo, CA",
        duration: "September 2024",
        description: "Helped coordinate Cal Poly’s Week of Welcome program for 5,000+ incoming students by managing event \
            communication, organizing 12+ team members to support events, and assisting WOW leaders with schedule planning.",
        highlights: [
            "Coordinated event communication for a large-scale student orientation program.",
            "Organized and managed a team of 12+ members to support various events.",
            "Assisted WOW leaders with schedule planning and event logistics."
        ],
        skills: ["Leadership", "Communication", "Event Planning", "Organization"]
    },
    {
        jobTitle: "SLO Days Orientation Leader",
        company: "Cal Poly SLO",
        dept: "New Student and Transition Programs",
        location: "San Luis Obispo, CA",
        duration: "April 2024 - August 2024",
        description: "Served as an orientation leader for SLO Days, helping incoming students acclimate to Cal Poly by leading activities, providing guidance, and supporting event logistics.",
        highlights: [
            "Led activities to help incoming students acclimate to Cal Poly.",
            "Provided guidance and support to new students during orientation.",
            "Assisted with event logistics and coordination for SLO Days.",
            "Gave presentations and led discussions to help students understand campus resources and expectations."
        ],
        skills: ["Leadership", "Communication", "Organization"]
    },
    {
        jobTitle: "Front of House Team Member",
        company: "Chipotle Mexican Grill",
        location: "San Luis Obispo, CA",
        duration: "January 2024 - March 2025",
        description: "Worked as a front of house team member at Chipotle, providing customer service, taking orders, closing the front line, and ensuring a positive dining experience.",
        highlights: [
            "Provided excellent customer service to guests.",
            "Took and prepared orders accurately and efficiently.",
            "Maintained cleanliness and organization of the dining area.",
            "Assisted team members with various tasks to ensure smooth restaurant operations.",
            "Closed the front line and ensured all tasks were completed before nightly restaurant closing.",
            "Managed cash register and handled transactions accurately and efficiently."
        ],
        skills: ["Customer Service", "Communication", "Teamwork", "Organization"]
    }
]

export const projects = [
{
        slug: "32 bit CPU",
		name: "32 Bit OTTER CPU",
		cardDesc: "A 32-bit CPU design project completed at Cal Poly, showcasing my skills in computer architecture and digital design. It was designed \
        and implemented using SystemVerilog, with a focus on performance and resource optimization. Forwarding and pipelining were implemented to improve \
        performance, and a comprehensive suite of testbenches was used to ensure correct functionality.",
        description: "A 32-bit CPU design project completed at Cal Poly, demonstrating my understanding of computer architecture and digital design.",
        highlights: [
            "Designed and implemented a 32-bit CPU using SystemVerilog.",
            "Tested the CPU with a comprehensive suite of testbenches to ensure correct functionality.",
            "Optimized the CPU design for performance and resource utilization.",
            "Ensured it was able to run a set of RISC-V assembly programs.",
        ],
		techStack: ["SystemVerilog", "Xilinx Vivado", "RISC-V Assembly"],
        status: "Complete",
        date: "April 2026 - July 2026"
    },
    {
        slug: "homelab",
		name: "Personal HomeLab Server",
		cardDesc: "A personal home server setup project, showcasing my skills in networking, server management, and virtualization. The server is designed to host various services and applications for personal use.",
        description: "A personal home server setup project, demonstrating my skills in networking, server management, and virtualization.",
        highlights: [
            "Set up a personal home server with multiple virtual machines.",
            "Configured networking and security settings for safe remote access, including a VPN setup.",
            "Deployed various services and applications for personal use with the use of Docker and virtual machines.",
            "Optimized server performance and resource utilization.",
        ],
		techStack: ["Linux/Unix", "Docker", "Virtual Machines", "ProxMox", "Cloudflare Tunnels", "Tailscale"],
        status: "In Progress",
        date: "August 2026 - Present"
    },
    {
        slug: "portfolio",
		name: "Personal Portfolio Website",
		cardDesc: "This is my personal website built to showcase my projects, experience, and skills. It is designed to be a clean and modern portfolio that highlights my work and provides an easy way for visitors to learn more about me. It also gives me a reason to make something deployable to the Unix servers at Cal Poly, which is a fun challenge in itself.",
        description: "A personal portfolio website built with React, showcasing projects and experience in a clean, modern design.",
        highlights: [
            "Built a consistent card system across the homepage and dedicated project views.",
            "Uses lightweight client-side navigation for smooth page changes without a router dependency.",
            "Designed to scale with me and my career.",
            "Deployed the site with Github Pages and a custom domain name."
        ],
        link: "https://github.com/smuido/cp-portfolio",
		techStack: ["React", "JavaScript", "HTML", "CSS", "Github Pages", "Node.js"],
        status: "Complete",
        date: "June 2026"
	},
	{
        slug: "mustang-ball-website",
		name: "Mustang Ball Website",
		cardDesc: "A website to showcase and give information for the Mustang Ball, an annual event at Cal Poly. \
			The website includes information about the event, an email form, links to ticket purchasing, and a gallery of past events.",
        description: "A website for the Mustang Ball event at Cal Poly, providing event details, ticketing information, and a gallery of past events.",
        highlights: [
            "Focused on guiding visitors quickly to event details and ticketing links.",
            "Uses the same React and CSS stack as the portfolio site for easy maintenance.",
            "Built to support an information-rich event page without feeling cluttered.",
        ],
        link: "https://github.com/smuido/mustang-ball-website",
		techStack: ["React", "JavaScript", "HTML", "CSS"],
        status: "In Progress",
        date: "April 2026 - Present"
	},
    {
        slug: "calendar-pi",
        name: "Calendar Pi",
        cardDesc: "An application interacting with the Google Calendar API to pull calendar events and display them in a user-friendly interface. Made to be deployed to a local Raspberry Pi and connected to a monitor.",
        description: "An application interacting with the Google Calendar API to pull calendar events and display them in a user-friendly interface. Made to be deployed to a local Raspberry Pi and connected to a monitor.",
        highlights: [
            "Interacts with the Google Calendar API to fetch and display events.",
            "UI designed and implemented through a React frontend.",
            "Provides a user-friendly interface for managing calendar events.",
            "Custom calendar designs for different views and layouts."
        ],
        link: "https://github.com/smuido/calendar-pi",
        techStack: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
        status: "In Progress",
        date: "July 2026 - Present"
    },
    {
        slug: "internship-scraper",
        name: "Internship Scraper",
        cardDesc: "A web scraper that collects internship listings from various websites and aggregates them into a single, easy-to-navigate interface.",
        description: "A web scraper that collects internship listings from various websites and aggregates them into a single, easy-to-navigate interface.",
        highlights: [
            "Scrapes internship listings from multiple websites and aggregates them into a single txt file.",
            "Designed to be easily extendable to support additional websites and data formats.",
            "Uses GoLang and the Colly library for efficient web scraping.",
            "Currently working on implementing a simple interface for users to view and filter internship listings."
        ],
        link: "https://github.com/smuido/internship-scraper",
        techStack: ["GoLang", "Colly", "JavaScript", "HTML", "CSS", "React", "Node.js"],
        status: "In Progress",
        date: "July 2026 - Present"
    }

]

export const volunteerExp = [
    {
        title: "President",
        org: "Cal Poly Ballroom Dance Club",
        location: "San Luis Obispo, CA",
        duration: "July 2026 - Present",
        description: "Lead and organize club activities, events, and meetings for the Cal Poly Ballroom Dance Club, fostering a community of dance enthusiasts.",
        highlights: [
            "Organized and led weekly officer board meetings and ensured effective communication and coordination among officers, performing biweekly check-ins.",
            "Performed check-ins with officers to ensure effective communication and coordination.",
            "Attended and represented the club at monthly Club Sports Council meetings, advocating for the club's interests and needs.",
        ]
    },
    {
        title: "Competition Coordinator",
        org: "Cal Poly Ballroom Dance Club",
        location: "San Luis Obispo, CA",
        duration: "July 2025 - June 2026",
        description: "Organized the competitive team travelling to competitions by ensuring proper lodging arrangements, transportation, and scheduling.",
        highlights: [
            "Coordinated travel and lodging for a 12-person competitive team, ensuring smooth logistics for competitions.",
            "Managed scheduling and communication with team members to ensure timely arrivals and departures to competitions 300+ miles away."
        ]
    },
    {
        title: "Stand-In Vice President",
        org: "Cal Poly Ballroom Dance Club",
        location: "San Luis Obispo, CA",
        duration: "July 2024 - June 2025",
        description: "Assisted the President in leading the club by performing check-ins with officers, notetaking during meetings, and taking on other miscellaneous responsibilities.",
        highlights: [
            "Performed regular check-ins with officers to ensure effective communication and coordination.",
            "Took detailed notes during meetings to document decisions and action items.",
            "Assumed additional responsibilities as needed to support the President and the club's operations."
        ]
    },
    {
        title: "Board Member",
        org: "Cal Poly Young Democratic Socialists of America",
        location: "San Luis Obispo, CA",
        duration: "September 2023 - June 2024",
        description: "Managed communication channels and coordinated outreach efforts for the Cal Poly chapter of the Young Democratic Socialists of America.",
        highlights: [
            "Managed communication channels and coordinated outreach efforts for the Cal Poly chapter of the Young Democratic Socialists of America.",
            "Organized and led club meetings and events, fostering engagement and participation among members.",
            "Collaborated with other board members to plan and execute boothing and other outreach activities to spread the club's message and engage the community."
        ]

    }
]

export const progLangs = ["Python", "JavaScript", "HTML", "C", "C#", "C++", "SystemVerilog", "Assembly", "SQL"]

export const education = [
	{
		name: "California Polytechnic State University, San Luis Obispo", 
		degree: "B.S. Computer Engineering",
        concentration: "General Concentration",
        gradYear: 2028
	},
	{
		name: "California Polytechnic State University, San Luis Obispo",
		degree: "B.A. Political Science",
		concentration: "Pre-Law",
        gradYear: 2028
	}
]