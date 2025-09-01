import { Navigation } from "@/components/ui/navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const heroPortrait = "/lovable-uploads/7b2c9d8c-b7fd-4112-b902-7378c86431a3.png";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.section) {
      let elId = location.state.section;
      setTimeout(() => {
        const el = document.getElementById(elId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-20">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
              
              {/* Left Side - AI/ML */}
              <div className="flex-1 text-left lg:pr-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-8xl font-bold text-foreground tracking-tight">
                    AI / ML
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Focused on designing and implementing AI/ML solutions to solve practical challenges, with experience in computer vision, speech recognition, and deep learning. Skilled in Python, TensorFlow, and PyTorch, I develop intelligent models that drive automation, efficiency, and innovation.
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <a
                      href="mailto:rishianandv@gmail.com"
                      className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:scale-105 inline-flex items-center gap-2"
                    >
                      <svg className="w-6 h-6 text-black animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M8 7V5a4 4 0 018 0v2" />
                        <path d="M12 12v4" />
                      </svg>
                      Hire Me
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1OFSPQa82ToIQ5MVT04WrBeq4l4bFR5OV/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:scale-105 inline-flex items-center gap-2 border border-border"
                    >
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 4v12m0 0l-4-4m4 4l4-4" />
                        <rect x="4" y="18" width="16" height="2" rx="1" />
                      </svg>
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>

              {/* Center - Portrait */}
              <div className="flex-1 flex justify-center py-8 lg:py-0">
                <div className="relative group">
                  {/* Animated Background Glow */}
                  <div 
                    className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse"
                    style={{
                      background: 'var(--accent-gradient)',
                      transform: 'scale(1.2)',
                      animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                  />
                  
                  {/* Rotating Ring Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-primary via-accent to-primary opacity-20 animate-spin" style={{
                    animation: 'spin 8s linear infinite',
                    transform: 'scale(1.1)'
                  }} />
                  
                  {/* Main Portrait with Hover Effects */}
                  <img 
                    src={heroPortrait}
                    alt="Creative Professional Portrait"
                    className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-cover object-center rounded-full shadow-2xl border-4 border-background transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-accent/50 animate-fade-in"
                    style={{
                      boxShadow: 'var(--shadow-soft)',
                      objectPosition: 'center top',
                      filter: 'brightness(1.05) contrast(1.1)'
                    }}
                  />
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{
                    transform: 'scale(1.3)'
                  }} />
                </div>
              </div>

              {/* Right Side - Data Science */}
              <div className="flex-1 text-right lg:pl-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-8xl font-bold text-foreground tracking-tight font-mono">
                    Data Engineer
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-md ml-auto text-justify">
                    Currently exploring Data Engineering concepts, focusing on learning how to build data pipelines, manage databases, and work with ETL processes. Developing skills in cloud platforms and big data tools to support AI/ML and analytics workflows
                  </p>
                  <div className="flex space-x-4 pt-4 justify-end">
                    <a
                      href="https://github.com/Rishianandd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg flex items-center gap-2 group"
                    >
                      <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-125 group-active:scale-95 group-focus:scale-110 drop-shadow-md" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfFISlO_RF61HFzUpK4LNkHuJ_JS3vY06_Jy2IaXRbusuQLDQ/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg flex items-center gap-2 group"
                    >
                      <svg className="w-6 h-6 text-accent-foreground animate-spin transition-transform duration-300 group-hover:scale-125 group-active:scale-95 group-focus:scale-110 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07l-1.41 1.41" />
                        <path d="M14 11a5 5 0 00-7.07 0l-1.41 1.41a5 5 0 007.07 7.07l1.41-1.41" />
                      </svg>
                      Collaborate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator removed as requested */}
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                RISHI ANAND
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-justify">
                Computer Science Engineering student at SRM Institute of Science and Technology (CGPA: 8.76/10) specializing in AI/ML. Experienced in developing vehicle detection systems for the Ministry of Defence and publishing research in machine learning for healthcare and computer vision. Skilled in TensorFlow, PyTorch, AWS, and Azure, with a portfolio of projects in web development, speech recognition, and NLP. Passionate about using technology to solve real-world problems and drive innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-6 rounded-lg bg-background shadow-sm">
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-foreground animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Research</h3>
                  <p className="text-muted-foreground">Published ML research & Ministry of Defence internship</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-background shadow-sm">
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-foreground animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">AI/ML</h3>
                  <p className="text-muted-foreground">TensorFlow, PyTorch, CNN, Speech Recognition, NLP</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-background shadow-sm">
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-foreground animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Full Stack</h3>
                  <p className="text-muted-foreground">React, HTML, CSS, Node.js, Python, SQL</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-background shadow-sm">
                  <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-foreground animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Achievements</h3>
                  <p className="text-muted-foreground">CTF Winner 2024, Microsoft Azure AI certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="mt-16 scroll-mt-40">
          <div className="max-w-2xl mx-auto bg-background rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Educational Background</h2>
            <div className="space-y-4">
              {/* Education Timeline */}
              <div className="flex flex-col items-center">
                {/* School Entry - St. Xavier's School */}
                <div className="flex items-center w-full mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-accent-foreground"></div>
                    {/* Vertical Gradient Line */}
                    <div className="h-16 w-1" style={{ background: "linear-gradient(to bottom, #f59e42, #6366f1)" }} />
                  </div>
                  <div className="bg-background rounded-lg shadow p-4 w-full">
                    <h3 className="text-lg font-semibold text-foreground mb-1">D.A.V Matriculation Higher Secondary School, Chennai-94</h3>
                    <p className="text-muted-foreground mb-1">Class X - TamilNadu State Board</p>
                    <p className="text-muted-foreground">Percentage: 71%</p>
                    <p className="text-muted-foreground">2019 - 2020</p>
                  </div>
                </div>
                {/* School Entry */}
                <div className="flex items-center w-full mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-accent-foreground"></div>
                    {/* Vertical Gradient Line */}
                    <div className="h-16 w-1" style={{ background: "linear-gradient(to bottom, #f59e42, #6366f1)" }} />
                  </div>
                  <div className="bg-background rounded-lg shadow p-4 w-full">
                    <h3 className="text-lg font-semibold text-foreground mb-1">D.A.V Matriculation Higher Secondary School, Chennai-94</h3>
                    <p className="text-muted-foreground mb-1">Class XII - TamilNadu State Board</p>
                    <p className="text-muted-foreground">Percentage: 87%</p>
                    <p className="text-muted-foreground">2021 - 2022</p>
                  </div>
                </div>
                {/* College Entry */}
                <div className="flex items-center w-full">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-accent-foreground"></div>
                    {/* Vertical Gradient Line */}
                    <div className="h-16 w-1" style={{ background: "linear-gradient(to bottom, #f59e42, #6366f1)" }} />
                  </div>
                  <div className="bg-background rounded-lg shadow p-4 w-full">
                    <h3 className="text-lg font-semibold text-foreground mb-1">S.R.M Institute of Science and Technology, Chengalpattu-603203</h3>
                    <p className="text-muted-foreground mb-1">B.Tech Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning</p>
                    <p className="text-muted-foreground">CGPA: 8.76/10</p>
                    <p className="text-muted-foreground">2022 - 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section>

  {/* Experience Section */}
  <section id="experience" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-0">
                <h2 className="text-3xl font-bold text-foreground mb-2">Academic & Professional Affiliations</h2>
                <div className="mb-10">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground">IAENG (International Association of Engineers)</h3>
                    <p className="text-muted-foreground">Membership ID: 364395</p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground">ISTE (Indian Society for Technical Education)</h3>
                    <p className="text-muted-foreground">Membership ID: 000476</p>
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-6 mt-8">
                  Professional Experience
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hands-on experience through internships and research projects in AI/ML, computer vision, IoT, and enterprise systems, applying deep learning, data-driven insights, and full-stack development to solve real-world challenges
                </p>
              </div>

              <div className="space-y-8">
                {/* Ministry of Defence Internship */}
                <div className="group relative bg-background rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          AI/ML Research Intern
                        </h3>
                        <p className="text-xl text-primary font-medium mb-1">
                          CVRDE - Combat Vehicle Research Development and Establishment
                        </p>
                        <p className="text-lg text-foreground mb-2">
                          Ministry of Defence, Government of India<br />
                          DRDO (Defence Research Development and Organisation)
                        </p>
                        <p className="text-muted-foreground">
                          June 2024 - August 2024
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-600" fill="red" stroke="red" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 19l-7 2V5a2 2 0 012-2h10a2 2 0 012 2v16l-7-2z" stroke="red" strokeWidth="2" />
                          </svg>
                          <a href="https://drive.google.com/file/d/122SW4jVTSpPMtgbM4sJzCZ6ssmgf27rQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline">View Certificate</a>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                          Defense Research
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-foreground leading-relaxed text-justify">
                        Conducted advanced research in computer vision and machine learning for defense applications, developing cutting-edge vehicle detection systems using state-of-the-art deep learning architectures. Built a comprehensive Vehicle Detection & Classification system using Python and PyTorch with the SSD300 (Single Shot MultiBox Detector) model and VGG16 backbone, training on a dataset of 355 images with 559 annotated bounding boxes. Implemented a complete pipeline including data preprocessing, augmentation with Albumentations, custom PyTorch Dataset/DataLoader creation, and model training for 40 epochs. Achieved 94% accuracy in vehicle detection across diverse environmental conditions using IoU and mAP evaluation metrics. Utilized OpenCV for image handling and visualization while implementing Non-Maximum Suppression (NMS) to filter overlapping detections, balancing real-time speed with accuracy for national security applications.
                      </p>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">TensorFlow</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">Computer Vision</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">Deep Learning</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">Python</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ministry of Railways Internship */}
                <div className="group relative bg-background rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          Computer Engineer Intern
                        </h3>
                        <p className="text-xl text-foreground font-medium mb-1">
                          ICF - Integral Coach Factory
                        </p>
                        <p className="text-lg text-foreground mb-2">
                          Ministry of Railways, Government of India
                        </p>
                        <p className="text-muted-foreground">
                          January 2024 - February 2024
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-600" fill="red" stroke="red" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 19l-7 2V5a2 2 0 012-2h10a2 2 0 012 2v16l-7-2z" stroke="red" strokeWidth="2" />
                          </svg>
                          <a href="https://drive.google.com/file/d/1I0pAX-30wAb-wILJWWE2UFZiPc0oVw8x/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline">View Certificate</a>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                          Systems Engineering
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-foreground leading-relaxed text-justify">
                        Gained comprehensive experience in enterprise system management and network optimization for critical railway infrastructure. Assisted in managing and maintaining SAP systems that support nationwide railway operations, focusing on optimizing network performance, security protocols, and seamless system integration. Contributed extensively to programming tasks, troubleshooting complex technical issues, and console management while working closely with experienced engineers. Documented detailed technical procedures and provided end-user support, ensuring knowledge transfer for future system development and maintenance. This role provided valuable exposure to large-scale enterprise systems and the technical challenges of maintaining critical infrastructure that serves millions of passengers daily.
                      </p>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">SAP Systems</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">Network Security</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">System Integration</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">Technical Documentation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PlanWcredios Internship */}
                <div className="group relative bg-background rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          Web Development Intern
                        </h3>
                        <p className="text-xl text-foreground font-medium mb-2">
                          PlanWcredios Photography Company
                        </p>
                        <p className="text-muted-foreground">
                          August 2023 - November 2023
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-600" fill="red" stroke="red" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 19l-7 2V5a2 2 0 012-2h10a2 2 0 012 2v16l-7-2z" stroke="red" strokeWidth="2" />
                          </svg>
                          <a href="https://drive.google.com/file/d/1KYUVvvuk7ecrobg5iEokpqwfDf2zWnes/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline">View Certificate</a>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                          Web Development
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-foreground leading-relaxed text-justify">
                        Contributed to web development projects as a key team member at PlanWcredios, a dynamic photography company, focusing on creating custom websites for clients and maintaining the company's digital presence. Developed responsive, visually appealing websites featuring custom galleries and portfolios that showcased photographers' work effectively. Maintained and continuously enhanced the official PlanWcredios company website, implementing new features and ensuring optimal performance. Collaborated closely with the development team to create user-friendly interfaces that improved client engagement and conversion rates. Gained valuable experience in web optimization techniques, cross-browser compatibility testing, and modern web development practices while working in a fast-paced creative environment that required balancing aesthetic appeal with technical functionality.
                      </p>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">HTML/CSS</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">JavaScript</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">Responsive Design</span>
                        <span className="px-3 py-1 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full text-sm font-medium">Web Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add more internships here if needed */}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Featured Projects
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
                  A showcase of innovative projects blending AI/ML, IoT, and full-stack development, highlighting practical solutions to real-world problems through research, design, and implementation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Vehicle Detection System */}
                <div className="group relative bg-secondary/30 rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Vehicle Detection System</h3>
                    <p className="text-muted-foreground mb-4 text-justify">
                      This project is an advanced computer vision solution designed for real-time vehicle detection and classification, leveraging state-of-the-art deep learning architectures such as SSD (Single Shot MultiBox Detector) and R-CNN. Developed as part of a research initiative at the Ministry of Defence, the system is engineered to support national security and defense operations by providing highly accurate detection capabilities across diverse environments. The project involved building a robust pipeline for data collection, annotation, preprocessing, and augmentation, followed by custom model training using TensorFlow and PyTorch. Key features include real-time inference, non-maximum suppression for optimal detection, and integration with OpenCV for visualization. The system was evaluated using industry-standard metrics like IoU and mAP, achieving over 94% accuracy. This work demonstrates expertise in deep learning, computer vision, and the deployment of scalable AI solutions for mission-critical applications in defense technology.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">TensorFlow</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Computer Vision</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Deep Learning</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">PyTorch</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">OpenCV</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">SSD (Single Shot MultiBox Detector)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">R-CNN</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">NumPy</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Pandas</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Albumentations</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Matplotlib</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Git/GitHub</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">NVIDIA CUDA (GPU)</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="https://github.com/Rishianandd/Vehicle_Detection_and_classification_using_single_shot_detector_and_R-CNN-" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      <button className="text-foreground hover:text-foreground/80 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Smart Energy Distribution and Monitoring Grid System */}
                <div className="group relative bg-secondary/30 rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center animate-bounce">
                      <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Smart Energy Distribution and Monitoring Grid System</h3>
                    <p className="text-muted-foreground mb-4 text-justify">
                      This Smart Grid System project leverages the power of IoT sensors and advanced machine learning algorithms to revolutionize energy management and distribution. Designed for optimal performance, the system collects real-time data from a network of sensors deployed across the grid, enabling predictive maintenance, fault detection, and dynamic load balancing. Machine learning models analyze consumption patterns and environmental factors to forecast demand and optimize energy allocation, reducing waste and improving efficiency. The project also features a secure cloud-based dashboard for monitoring and control, supporting integration with renewable energy sources and smart devices. This work highlights expertise in IoT, energy systems, and the application of AI for sustainable infrastructure and smart city development.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">IoT</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Machine Learning</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Energy Systems</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">IoT Sensors (energy meters, smart devices)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">MQTT / HTTP Protocols</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Machine Learning Algorithms (Regression, Classification, Forecasting)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">XGBoost</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Scikit-learn</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">TensorFlow / PyTorch</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">thinkstospeak</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">MySQL</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Data Visualization (Matplotlib, Plotly, Power BI / custom dashboard)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Secure Cloud Dashboard (Web-based monitoring & control)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Integration with Renewable Energy Sources</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="https://github.com/Rishianandd/Smart_Energy_Distribution_and_Monitoring_Grid_System" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      <button className="text-foreground hover:text-foreground/80 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Intelligent Image Dehazing */}
                <div className="group relative bg-secondary/30 rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center animate-pulse">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Intelligent Image De-smoking and De-hazing</h3>
                    <p className="text-muted-foreground mb-4 text-justify">
                      The Intelligent Image Dehazing project is an innovative computer vision solution aimed at restoring image clarity in challenging environments affected by haze, fog, or atmospheric scattering. Utilizing deep learning algorithms and sophisticated atmospheric models, the system automatically detects and removes visual obstructions, enhancing image quality for applications in surveillance, autonomous vehicles, and remote sensing. The project involved building custom neural networks for haze estimation and removal, training on large datasets with diverse weather conditions, and integrating real-time processing capabilities. Evaluation metrics such as PSNR and SSIM were used to validate performance, achieving significant improvements in visibility and detail restoration. This project demonstrates advanced skills in image processing, deep learning, and the development of practical AI tools for real-world challenges.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Computer Vision</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Deep Learning</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Image Processing</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Deep Learning Frameworks: TensorFlow / PyTorch</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">ResNet-18 (backbone for feature extraction)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Custom Neural Networks (for haze estimation & removal)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">OpenCV (image processing & visualization)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Data Augmentation (Albumentations / OpenCV transformations)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Large-scale Weather Condition Datasets</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation Metrics: PSNR, SSIM</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">NumPy, Pandas (data handling)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Matplotlib, Seaborn (visualization)</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">GPU Acceleration (CUDA)</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="https://github.com/Rishianandd/Intelligent_Image_De-smoking_and_De-hazing" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      <button className="text-foreground hover:text-foreground/80 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Voice Bot */}
                <div className="group relative bg-secondary/30 rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center animate-bounce">
                      <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Development and Evaluation of a Speech-Recognized Voice Bot</h3>
                    <p className="text-muted-foreground mb-4 text-justify">
                      The Voice Bot project is a cutting-edge conversational AI system designed to facilitate seamless and natural voice interactions. Combining state-of-the-art natural language processing (NLP) and speech recognition technologies, the bot can understand, interpret, and respond to user queries in real time. The system supports multi-turn conversations, context awareness, and sentiment analysis, making it suitable for customer support, virtual assistants, and accessibility solutions. Built using advanced frameworks and cloud APIs, the project features robust intent detection, entity extraction, and voice synthesis for lifelike responses. Extensive testing ensured high accuracy and user satisfaction, showcasing expertise in NLP, speech technologies, and the deployment of scalable AI assistants for diverse applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">NLP</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Speech Recognition</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">AI Assistant</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Google Speech-to-Text API</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">SpeechRecognition</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">gTTS</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">pyttsx3</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">NLTK</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">spaCy</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">TensorFlow</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">PyTorch</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Google Cloud</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">AWS</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Azure Cognitive Services</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Rasa</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Dialogflow</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">VADER</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">TextBlob</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Flask</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">FastAPI</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Context Awareness</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Multi-turn Dialogue Management</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Heroku</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Deployment: AWS</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: Accuracy</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: Latency</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: User Satisfaction Metrics</span>
                    </div>
                    <div className="flex space-x-3">
                      <a href="https://github.com/Rishianandd/ALpha_Voice_Bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      <button className="text-foreground hover:text-foreground/80 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <section id="research" className="mt-12 py-12 bg-secondary/10 rounded-xl">
              </section>
                <div className="max-w-6xl mx-auto px-6">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Research & Innovation</h2>
                  <div className="space-y-8">
                    <div className="group relative bg-background rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border/20">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center animate-bounce mt-1">
                              <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-0">Development and Evaluation of a Speech-Recognized Voice Bot</h3>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <a href="https://ieeexplore.ieee.org/document/10465431" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/80 transition-colors">Published Paper</a>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div>
                            <span className="font-semibold text-foreground">Published in:</span> 2023 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES)
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Date of Conference:</span> 14-15 December 2023
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Date Added to IEEE Xplore:</span> 19 March 2024 &bull; 
                            <span className="font-semibold text-foreground">DOI:</span> <a href="https://doi.org/10.1109/ICSES60034.2023.10465431" target="_blank" rel="noopener noreferrer" className="underline text-primary">10.1109/ICSES60034.2023.10465431</a> &bull; 
                            <span className="font-semibold text-foreground">Publisher:</span> IEEE
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Conference Location:</span> Chennai, India
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 text-justify">
                          The Speech-Recognized Voice Bot (SRVB) is a next-generation conversational AI system that integrates advanced speech recognition and natural language processing to enable seamless human–machine interaction. By leveraging deep learning models trained on large and diverse speech datasets, the bot can accurately handle variations in tone, accent, and noisy environments. It supports multi-turn dialogue, intent recognition, entity extraction, and sentiment analysis, allowing it to understand user queries contextually and provide meaningful, real-time responses. The system is further enhanced with natural text-to-speech (TTS) capabilities, delivering human-like voice outputs for lifelike interaction.”

“Extensive evaluations, including word error rate (WER), intent recognition accuracy, latency, and user satisfaction, demonstrated the SRVB’s reliability and efficiency in real-world scenarios. With applications ranging from virtual assistants and smart devices to customer support, healthcare accessibility, and education, the project highlights expertise in ASR, NLP, and deep learning, while emphasizing inclusivity and accessibility. By combining advanced algorithms with scalable deployment, the SRVB showcases the potential of conversational AI systems to transform the future of speech-driven technology
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Speech Recognition</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">NLP</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">AI Assistant</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Python</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Google Speech-to-Text API</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">SpeechRecognition</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">gTTS</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">pyttsx3</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">NLTK</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">spaCy</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">TensorFlow</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">PyTorch</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Google Cloud</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">AWS</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Azure Cognitive Services</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Rasa</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Dialogflow</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">VADER</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">TextBlob</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Flask</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">FastAPI</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Context Awareness</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Multi-turn Dialogue Management</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Heroku</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Deployment: AWS</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: Accuracy</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: Latency</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: User Satisfaction Metrics</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Cloud Deployment</span>
                        </div>
                        <a href="https://doi.org/10.1109/ICSES60034.2023.10465431" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor" aria-label="Paper Link">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                          View Paper
                        </a>
                      </div>
                    </div>
                    <div className="group relative bg-background rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border/20">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center animate-bounce mt-1">
                              <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-0">
                              Prediction and diagnosis of cardiovascular disease using cloud<br />
                              <span className="block">and machine learning design</span>
                            </h3>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <a href="https://link.springer.com/article/10.1186/s13677-024-00720-x" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/80 transition-colors">Published Paper</a>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div>
                            <span className="font-semibold text-foreground">Published in:</span> Proceeding of ICICC-2024 ,Springer - Lecture note in networks and systems LNNS series, ISSN 2367-3389
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Date of Publication:</span> 20 January 2025
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Publisher:</span> Journal of Cloud Computing (SpringerOpen, Springer Nature)
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Location:</span> Hyderbad, India
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 text-justify">
                          The Heart Disease Prediction project is a cloud-based framework (CBF) designed to address the growing challenge of cardiovascular diseases, which remain a leading cause of death worldwide. With lifestyle factors such as sedentary habits, smoking, alcohol consumption, and poor physical activity contributing significantly to heart-related illnesses, there is an urgent need for proactive and scalable solutions. This system leverages cloud infrastructure to continuously monitor patient health information, ensuring accessibility, efficiency, and real-time analysis for healthcare providers.”

“The framework employs a four-step cloud-driven process combined with advanced machine learning algorithms to detect and classify cardiac illnesses. By applying multiple predictive models and validating their performance using evaluation parameters, the system ensures high accuracy and reliability in forecasting patient health outcomes. This project highlights the integration of cloud computing and machine learning in healthcare, showcasing their potential to improve preventive care, enable early intervention, and support smarter decision-making in medical practice
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Cloud Computing</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Machine Learning</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Healthcare Analytics</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Python</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Random Forest</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">SVM</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Neural Networks</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Data Preprocessing</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Feature Selection</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Model Training</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Real-time Analytics</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Security</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: Accuracy</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: Precision</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: Recall</span>
                          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm">Evaluation: F1-score</span>
                        </div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                          <a href="https://link.springer.com/article/10.1186/s13677-024-00720-x" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                            <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            View Paper
                          </a>
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              </div>
            </section>
          </main>
        {/* Contact Section (at the very bottom) */}
  <section id="contact" className="py-8 bg-background scroll-smooth">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl w-full mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">Let’s Connect</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-justify">
                Feel free to reach out for internship opportunities, research collaborations, or discussions in Artificial Intelligence, Machine Learning, and Data Engineering / Science. I am eager to apply my knowledge, gain industry exposure, and contribute to innovative projects while continuing to learn and grow. I’m always open to connecting with professionals, peers, and mentors to explore new possibilities and build meaningful collaborations.
              </p>
              <div className="flex flex-row justify-center items-center gap-4">
                <a href="https://www.linkedin.com/in/rishiii-anand/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:scale-105 group flex items-center gap-2">
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-125 group-active:scale-95 group-focus:scale-110 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Linked-In
                </a>
                <a href="mailto:rishianandv@gmail.com" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:scale-105 group flex items-center gap-2">
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-125 group-active:scale-95 group-focus:scale-110 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  e-mail: rishianandv@gmail.com
                </a>
                <a href="https://github.com/RishiAnandd" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:scale-105 group flex items-center gap-2">
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-125 group-active:scale-95 group-focus:scale-110 drop-shadow-md" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Github
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFISlO_RF61HFzUpK4LNkHuJ_JS3vY06_Jy2IaXRbusuQLDQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:scale-105 group flex items-center gap-2">
                  <svg className="w-6 h-6 text-accent-foreground animate-spin transition-transform duration-300 group-hover:scale-125 group-active:scale-95 group-focus:scale-110 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07l-1.41 1.41" />
                    <path d="M14 11a5 5 0 00-7.07 0l-1.41 1.41a5 5 0 007.07 7.07l1.41-1.41" />
                  </svg>
                  Collaborate
                </a>
              </div>
            </div>
          </div>
        </section>
        </div>
      );
};

export default Index;