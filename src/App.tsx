import React from 'react';
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative">
      <FloatingShapes ></FloatingShapes>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Your New Project
        </h1>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  )
}
