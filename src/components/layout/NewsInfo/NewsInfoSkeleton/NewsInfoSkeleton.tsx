"use client";
import ParallaxTilt from "react-parallax-tilt";

interface NewsInfoSkeletonProps {}

export function NewsInfoSkeleton({}: NewsInfoSkeletonProps) {
  return (
    <div
      className="relative w-full max-w-7xl h-fit lg:max-h-[655px]
      bg-dark/75 md:bg-placeholder-gradient m-auto rounded-md base:rounded-3xl md:flex"
    >
      <ParallaxTilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="w-full md:w-[50%] h-52 md:h-96"
      >
        <div className="bg-white/25 w-full h-full rounded-md base:rounded-3xl drop-shadow-card overflow-hidden relative">
          <div
            className="w-screen h-screen py-4 px-3 justify-between flex flex-col
            before:absolute before:inset-0 before:bg-gradient-to-skeleton rounded-md base:rounded-3xl
            before:animate-[shimmer_500ms_infinite]"
          />
        </div>
      </ParallaxTilt>
      <div className="md:w-[50%] flex flex-col gap-3 p-3">
        <div className="h-8 w-1/2 m-auto bg-dark/25 relative overflow-hidden rounded-md base:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-skeleton animate-[shimmer_500ms_infinite]" />
        </div>
        <div className="h-14 w-3/4 bg-dark/25 relative overflow-hidden rounded-md base:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-skeleton animate-[shimmer_500ms_infinite]" />
        </div>
        <div className="h-8 w-2/4 bg-dark/25 relative overflow-hidden rounded-md base:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-skeleton animate-[shimmer_500ms_infinite]" />
        </div>
        <div className="h-28 w-full bg-dark/25 relative overflow-hidden rounded-md base:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-skeleton animate-[shimmer_500ms_infinite]" />
        </div>
        <div className="h-10 w-full bg-dark/25 relative overflow-hidden rounded-md base:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-skeleton animate-[shimmer_500ms_infinite]" />
        </div>
        <div className="h-8 w-full bg-dark/25 relative overflow-hidden rounded-md base:rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-skeleton animate-[shimmer_500ms_infinite]" />
        </div>
      </div>
    </div>
  );
}
