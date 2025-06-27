
"use client";

import React from "react";  
import { InfiniteMovingCards } from "../componnets/ui/infinite-moving-cards";

const  Testimonials = () => {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I’ve always struggled to remember anniversaries and special occasions, but with TimeCapsuleMail, that stress is gone. I scheduled a heartfelt letter to my wife for our anniversary months in advance, and when it arrived, she was blown away. It felt like I was more present than ever, even though I had written it months before. This tool makes thoughtfulness effortless.",
    name: "Rohan Mehta",
    title:  "Software Engineer",
  },
  {
    quote:
      "As a founder, I use TimeCapsuleMail to remind myself of our mission during tough times. It's powerful and reliable.",
    name: "Kabir  Singh",
    title: "Startup Founder",
  },
  {
    quote: "TimeCapsuleMail made our wedding day even more special. We wrote letters to our future selves months before, and reading them on the big day was such an emotional, unforgettable moment.",
    name: " Aarav & Meera",
    title: "Engaged Couple",
  },
  {
    quote:
      "As an entrepreneur, you often get so caught up in the daily grind that you lose sight of the bigger picture. I’ve started using TimeCapsuleMail to send myself quarterly reminders — words of encouragement, lessons learned, and notes from moments of clarity. Every time those emails arrive, it grounds me. It’s like having a mentor version of myself cheering me on",
    name: "Kunal Batra"
,
    title: "Startup Founder",
  },
  {
    quote:
      "Sending a letter to my future self has never been easier. TimeCapsuleMail is like a time machine for my thoughts.",
    name: "Aditi Sharma",
    title: "Personal Growth Enthusiast",
  },
];

export default Testimonials;