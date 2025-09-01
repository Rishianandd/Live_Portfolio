import React from "react";
import { Navigation } from "../components/ui/navigation";

const Certifications = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Certifications</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Add your certifications here */}
          <div className="bg-background rounded-xl shadow p-6 border border-border/20">
            <h2 className="text-2xl font-semibold text-accent mb-2">Microsoft Azure AI Fundamentals</h2>
            <p className="text-muted-foreground mb-1">Issued by Microsoft</p>
            <p className="text-muted-foreground">Date: June 2024</p>
          </div>
          <div className="bg-background rounded-xl shadow p-6 border border-border/20">
            <h2 className="text-2xl font-semibold text-accent mb-2">TensorFlow Developer Certificate</h2>
            <p className="text-muted-foreground mb-1">Issued by Google</p>
            <p className="text-muted-foreground">Date: March 2024</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Certifications;
