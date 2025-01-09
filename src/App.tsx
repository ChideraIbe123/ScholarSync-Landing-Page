import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-lavender">
      <Header />
      <Hero />
      <VideoSection />
      <Features />
      <Footer />
    </div>
  );
}