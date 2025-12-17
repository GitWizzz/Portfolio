import React from "react";
import Img1 from "../assets/Images/image1.jpg";
import Img2 from "../assets/Images/image2.jpg";
import Img3 from "../assets/Images/image3.jpg";
import Img5 from "../assets/Images/image5.jpg";
import Img6 from "../assets/Images/image6.jpg";

export default function PortfolioSection(){
  return(
    <section>
      <div>
        <h1 className="text-2xl font-semibold text-white">Portfolio</h1>
        <div className="w-10 h-1 bg-yellow-400 rounded mt-2"/>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard title="Landing Page" category="Frontend" image={Img1} live="https://portfolio-shivam-tillak.vercel.app/" source="https://github.com/GitWizzz/Portfolio"/>
        <ProjectCard title="Bimindai" category="Backend" image={Img2} live="https://bimindai.vercel.app/" source="https://github.com/GitWizzz/bimindai"/>
        <ProjectCard title="Tasty Bites" category="Full Stack" image={Img3} live="https://tasty-bites-rho.vercel.app/" source="https://github.com/GitWizzz/Tasty-Bites"/>
        <ProjectCard title="Dashboard UI" category="UI Design" image={Img3} live="https://github.com/GitWizzz/Liquid_Galaxy_Task-2-GSoC-2025" source="https://github.com/GitWizzz/Liquid_Galaxy_Task-2-GSoC-2025"/>
        <ProjectCard title="Galaxy Control" category="Flutter, Visualization, Open Source" image={Img5} live="https://github.com/GitWizzz/Liquid_Galaxy_Task-2-GSoC-2025" source="https://github.com/GitWizzz/Liquid_Galaxy_Task-2-GSoC-2025"/>
        <ProjectCard title="Map Logic" category="Geospatial, Mapping, Visualization" image={Img6} live="https://drive.google.com/file/d/1dAGhLTdC9MjDjnqi4fnybtRfgwtmAB9_/view?usp=sharing" source="https://drive.google.com/file/d/1dAGhLTdC9MjDjnqi4fnybtRfgwtmAB9_/view?usp=sharing"/>
      </div>
    </section>
  );
}

function ProjectCard({title,category,image,live,source}){
  return(
    <div className="group bg-[#2a2a2b] rounded-xl overflow-hidden border border-white/5 hover:border-yellow-400/40 transition">
      
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-white group-hover:text-yellow-400 transition">{title}</h3>
        <p className="text-xs text-gray-400 mt-1">{category}</p>

        <div className="mt-4 flex gap-3">
          <a href={live} target="_blank" rel="noreferrer" className="px-3 py-1 text-xs rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition">Live</a>
          <a href={source} target="_blank" rel="noreferrer" className="px-3 py-1 text-xs rounded-md border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 transition">Source</a>
        </div>
      </div>
    </div>
  );
}
