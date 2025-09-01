import React from "react";
import { Navigation } from "../components/ui/navigation";

const About: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
  <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-justify">
          I am Rishi Anand, a passionate and results-driven Computer Science Engineer specializing in Artificial Intelligence and Machine Learning. Currently pursuing my B.E. in CSE (AIML) at SRM Institute of Science and Technology with a CPGA of 8.76/10, I have built a strong foundation in machine learning, deep learning, computer vision, and natural language processing, complemented by hands-on experience in full-stack development and IoT systems.<br /><br />
          Over the years, I have worked on diverse projects such as real-time vehicle detection using SSD and R-CNN, an IoT-powered Smart Energy Distribution Grid, a Multilingual Ticketing System for Museums, and a Speech-Recognized Voice Bot presented at an IEEE-sponsored international conference. These experiences reflect my ability to blend research, engineering, and innovation to solve real-world problems.<br /><br />
          I have also interned with the Ministry of Defence and the Ministry of Railways, where I gained valuable exposure to applied AI/ML, system optimization, and enterprise technologies like SAP. My skill set spans across Python, C++, and tools like TensorFlow, PyTorch, XGBoost, and Keras, as well as web development and cloud platforms (AWS, Azure).<br /><br />
          With a strong interest in Data Science, AI research, and intelligent system design, I aim to contribute to impactful projects that push the boundaries of technology. My ultimate goal is to leverage AI/ML to create scalable, efficient, and meaningful solutions across industries.
        </p>
          <div className="mt-12 text-center">
            <blockquote className="text-xl italic border-t pt-8 font-serif text-black dark:text-black flex items-center justify-center gap-4">
              <span className="inline-block h-10 w-1 bg-yellow-400 rounded-full"></span>
              <span>Hard work beats talent when talent doesn't work hard.</span>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
