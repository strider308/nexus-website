"use client";

import React from "react";
import { CinematicExperience } from "@/components/cinematic/CinematicExperience";
import { CinematicEntrance } from "@/components/ui/CinematicEntrance";
import { SiteHeader } from "@/components/ui/SiteHeader";

// Import HTML narrative chapters
import { OpeningChapter } from "@/components/chapters/OpeningChapter";
import { FragmentedChapter } from "@/components/chapters/FragmentedChapter";
import { MappingChapter } from "@/components/chapters/MappingChapter";
import { ArchitectureChapter } from "@/components/chapters/ArchitectureChapter";
import { ProofChapter } from "@/components/chapters/ProofChapter";
import { FinalChapter } from "@/components/chapters/FinalChapter";

export default function Home() {
  return (
    <>
      {/* 1. Cinematic entrance logo intro overlay */}
      <CinematicEntrance />

      {/* 2. Global header navigation */}
      <SiteHeader />

      {/* 3. Infinite scrolling narrative experience */}
      <CinematicExperience>
        <div className="flex flex-col w-full">
          <OpeningChapter />
          <FragmentedChapter />
          <MappingChapter />
          <ArchitectureChapter />
          <ProofChapter />
          <FinalChapter />
        </div>
      </CinematicExperience>
    </>
  );
}
