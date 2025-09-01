import React from "react";
import { Navigation } from "../components/ui/navigation";

const Contact: React.FC = () => {
  return (
    <>
      <Navigation />
  <div className="container mx-auto min-h-[85vh] flex items-center justify-center px-6 pt-32 pb-10">
        <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">Contact</h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Feel free to reach out for internship opportunities, research collaborations, or discussions in Artificial Intelligence, Machine Learning, and Data Engineering / Science. I am eager to apply my knowledge, gain industry exposure, and contribute to innovative projects while continuing to learn and grow. I’m always open to connecting with professionals, peers, and mentors to explore new possibilities and build meaningful collaborations.
        </p>
  <div className="flex flex-row justify-center items-center gap-4">
          <a href="https://www.linkedin.com/in/rishiii-anand/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg">Linked-In</a>
          <a href="mailto:rishianandv@gmail.com" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">e-mail: rishianandv@gmail.com</a>
          <a href="https://github.com/RishiAnandd" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg">Github</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFISlO_RF61HFzUpK4LNkHuJ_JS3vY06_Jy2IaXRbusuQLDQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg">Collaborate</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
