// src/data/aboutData.js
import { MapPin, Camera, Shield } from 'lucide-react';

export const founders = [
  {
    name: "[Founder 1 Name]",
    title: "Co-Founder & CEO",
    description:
      "A visionary entrepreneur with deep experience in safety technology and business operations. [He/She] leads the strategic direction of Tracker US Technology, focusing on delivering trust and innovation to every customer.",
  },
  {
    name: "[Founder 2 Name]",
    title: "Co-Founder & CTO",
    description:
      "The tech brain behind our solutions, [he/she] specializes in GPS systems, IoT integration, and CCTV infrastructure. With a passion for problem-solving, [he/she] ensures our systems are smart, secure, and scalable.",
  },
];

export const offerings = [
  {
    title: "GPS Tracking Systems",
    icon: MapPin,
    description: "For personal vehicles, fleets & logistics",
    hover: true,
  },
  {
    title: "CCTV Installation & Monitoring",
    icon: Camera,
    description: "For homes, offices, shops",
    hover: false,
  },
  {
    title: "Vehicle Security Solutions",
    icon: Shield,
    description: "Like immobilizers, live tracking, and alerts",
    hover: false,
  },
];
