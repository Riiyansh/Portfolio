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
    title:
      "Currently building practical AI/ML applications using LLMs and NLP to solve real-world, day-to-day problems.",
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
    title: "Document Verification Website",
    des: "This project is designed to detect tampering of documents using computer vision techniques. It helps organizations verify the authenticity of documents provided by employees, customers, or any other individuals. The project achieves this by calculating the structural similarity between an original document and a user-provided document image.",
    img: "/tampering.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/minor-project-klmh.onrender.com",
  },
  {
    id: 2,
    title: "FAQ CHATBOT",
    des: "A smart, lightweight, and embeddable FAQ chatbot built using Streamlit, Sentence Transformers, and FAISS. Upload your own CSV with questions and answers, and this bot will semantically match and respond to user queries.",
    img: "/faq_chatbot.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Certificate Generator",
    des: "A Python-based automation tool to generate personalized certificates from a template and participant data. Built using the Pillow library, this tool helps efficiently create customized certificates for events, workshops, or online courses.",
    img: "/certificate.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Weather App",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/weather_app.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Riyansh is a highly driven and dependable team member with a sharp technical mind and great communication skills. His ability to take initiative, solve problems efficiently, and stay calm under pressure makes him an asset to any team. At Ecell, his leadership and dedication have consistently pushed our initiatives in the right direction.",
    name: "Lakshya Gautam",
    title: "Co Lead E-Cell IIIT Bhopal 22024",
  },
  {
    quote:
      "Riyansh is one of the most dedicated and capable students I’ve had the pleasure to mentor. His curiosity, technical proficiency, and problem-solving mindset stand out clearly. Whether it's leading student initiatives or working on advanced AI projects, Riyansh approaches every task with professionalism and passion. He’s a quick learner and a natural leader—an asset to any academic or professional setting.",
    name: "Dr. Sonal Chandel",
    title: "Assistant Professor IIIT",
  },
  {
    quote:
      "Riyansh is a highly motivated and intellectually curious researcher. During his internship under my mentorship at the University of Twente, he demonstrated a strong grasp of machine learning and deep learning concepts, along with the ability to apply them effectively in real-world research settings. His problem-solving skills, dedication, and quick adaptability made him a standout intern. Riyansh shows great potential as a future AI researcher and practitioner.",
    name: "Dr. Muzzamil Khan",
    title: "Post Doctoral candiate at Twente University, Netherlands",
  },
  {
    quote:
      "Collaborating with Riyansh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Dr. Ajay Shrivastava",
    title: "Head of Training and Placement Cell IIIT Bhopal",
  },
  {
    quote:
      "Working with Riyansh during his internship at V Group Inc. was a great experience. He’s sharp, quick to learn, and highly proactive. His contributions to our AI-based 'Context to Call' platform—especially in real-time audio processing and chatbot development—were impressive. Riyansh is not only technically sound but also a great team player who brings clarity, dedication, and enthusiasm to every task",
    name: "Hitika Trpathi",
    title: "ML Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "V Group",
    img: "/vg.png",
    nameImg: "/v.png",
  },
  {
    id: 2,
    name: "University of twente",
    img: "/tw.png",
    nameImg: "/twente.png",
  },
  {
    id: 3,
    name: "IIIT Bhopal",
    img: "/iiit.jpg",
    nameImg: "/iiit.png",
  },
  {
    id: 4,
    name: "IEEE IIIT Bhopal Student Branch",
    img: "/ie.png",
    nameImg: "/ieee-removebg-preview.png",
  },
  {
    id: 5,
    name: "E Cell IIIT Bhopal",
    img: "/ecell.png",
    nameImg: "/eccc.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "SDE AI/ML Intern",
    desc: "Spearheaded development of the Context to Call platform, implementing AI/ML-based contextual routing logic using vector embeddings and large language models to determine the most relevant contact point from page-level context.Integrated Google Speech-to-Text API to transcribe live phone conversations, enabling context extraction from real-time customer calls with <2s transcription latency.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Research Intern",
    desc: "Collaborated under Dr. Muzammil Khan to build deep learning pipelines in PyTorch for image-based classification using CNN architectures like ResNet and VGG. Conducted extensive experimentation and hyperparameter tuning, resulting in an 18% accuracy boost in medical image classification tasks.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Designed and developed the official website for the IEEE IIIT Bhopal Student Branch using HTML, CSS, and JavaScript, featuring responsive layouts, event showcase, and dynamic member sections to improve the club’s online presence and engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Founder club Lead",
    desc: "Established and led two flagship student organizations at IIIT Bhopal—IEEE Student Branch and Entrepreneurship Cell (E-Cell)—to promote innovation, research, and startup culture. Organized technical workshops, speaker sessions, and hackathons, impacting 150+ students and creating a thriving community of tech and entrepreneurial talent.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Riiyansh",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://github.com/Riiyansh",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/riyansh-chouhan/",
  },
];
