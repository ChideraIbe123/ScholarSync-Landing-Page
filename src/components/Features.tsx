import React from 'react';
import { Zap, BookOpen, Users } from 'lucide-react';
import { Feature } from './Feature';

export const Features = () => {
  return (
    <section className="py-48 px-4 bg-lavender">
      <div className="container mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-6xl font-bold mb-8 tracking-tight text-gunmetal">
            Powered by Advanced <span className="gradient-text">AI Technology</span>
          </h2>
          <p className="text-xl text-gunmetal/70 max-w-3xl mx-auto font-light">
            Experience the future of academic research with our cutting-edge features
          </p>
        </div>

        <div className="space-y-48">
          <Feature
            title="Neural Research Analysis"
            description="Our advanced neural networks analyze research papers with unprecedented precision, extracting key insights and patterns that would take hours to discover manually. The system continuously learns from your research patterns, providing increasingly sophisticated and personalized analysis."
            icon={Zap}
            image="https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=800&h=600"
            imageAlt="AI Analysis Visualization"
            color="text-gunmetal"
          />

          <Feature
            title="Quantum Citation Engine"
            description="Experience the next generation of citation management with our quantum-inspired citation engine. Automatically format and validate citations across any style guide with perfect accuracy, while our AI predicts and suggests relevant citations based on your research context."
            icon={BookOpen}
            image="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800&h=600"
            imageAlt="Citation Management Interface"
            color="text-gunmetal"
            reverse
          />

          <Feature
            title="Synergistic Collaboration"
            description="Transform your research workflow with our advanced real-time collaboration platform. Share annotations, insights, and comments instantly while our AI-powered system maintains perfect synchronization across your entire research team, enabling breakthrough discoveries."
            icon={Users}
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
            imageAlt="Team Collaboration"
            color="text-gunmetal"
          />
        </div>
      </div>
    </section>
  );
};