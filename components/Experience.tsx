"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TracingBeam } from "./ui/tracking-beam";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
});

export function Experiences() {
  return (
    <section id="experiences" className="w-full lg:py-20 py-10">
      <div className="px-4 grid  items-center justify-center gap-6 text-center md:px-6">
        <div className="space-y-6 text-center">
          <h2
            className={cn(
              "text-4xl font-bold tracking-tighter sm:text-4xl underline underline-offset-8 decoration-blue-500 ",
              montserrat.className
            )}
          >
            My Experience
          </h2>
        </div>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {ExperineceContent.map((experience, index) => (
              <div
                key={`content-${index}`}
                className="mb-4 border border-black-700 py-3"
              >
                <h2 className="bg-black text-white rounded-full font-bold text-xl w-fit px-4 mb-0">
                  {experience.company}
                </h2>

                <h2 className="bg-black text-white rounded-full w-fit px-4 mb-0">
                  {experience.role}
                </h2>
                <p className="text-left text-gray-400 text-sm px-4 pt-1 mb-4">
                  {experience.from} - {experience.to}
                </p>

                {experience.description.map((item, index) => (
                  <li
                    className="rounded-full text-sm w-fit text-gray-400/70 px-4 py-0 mb-1 items-start text-start"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
                {/* <div className="flex item-center justify-around mt-1">
                  {experience.skills.map((skill, index) => (
                    <div
                      className="rounded-full text-sm w-fit px-4 py-1"
                      key={index}
                    >
                      • {skill}
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

const ExperineceContent = [
  {
    company: "BanterAI",
    role: "Lead Software Engineer",
    from: "Jun 2023",
    to: "Present",
    description: [
      `Worked on low-latency voice call (<2s response time) experiences for web and phone with websockets and Twilio`,
      `Setup efficient RAG system to provide bots access to long-form content and real-time information`,
      `Built internal tools to fine-tune LLMs in seconds",
    badge: "React"`,
    ],
    skills: ["WebSocket", "Voice Agents", "AI Agents", "LLMs", "RAG", "Twilio"],
  },
  {
    company: "DevKit",
    role: "Founder",
    from: "Jan 2022",
    to: "Present",
    description: [
      `Bundled and AI-powered tools to help developers save 10s of hours every week.`,
      `$5K revenue. 8K+ signups. $10K raised from ZFellows. `,
      `Pitched to partners at a16z, Sequoia, Nexus Tech Ventures, Techstars, etc. on 1-1 virtual calls`,
    ],
    skills: ["Vercel", "AWS", "NextJS"],
  },
  {
    company: "DappCamp",
    role: "Software Engineer",
    from: "Mar 2022",
    to: "Jan 2023",
    description: [
      `Built a custom course platform to migrate from a revenue-sharing platform resulting in savings of over $25K`,
      `Built an internal hiring platform to connect Web3 companies with developers`,
      `Scraped and analyzed data for market research`,
    ],
    skills: ["Python", "Solidity", "NextJS", "Amazon ECS"],
  },
  {
    company: "Avalara",
    role: "Software Engineer",
    from: "Jul 2020",
    to: "Dec 2021",
    description: [
      `Migrated multi-node EC2 based ElasticSearch 6 cluster to EKS based ElasticSearch 7 cluster. The cluster stored more than 500M records.`,
      `Worked on data pipelines built with Spark and Scalding processing terabytes of data every month`,
      `Built a low-code tool with Go and React to allow users to scrape websites with an intuitive user interface. It is being used extensively across multiple teams.`,
      `Built a Scala REST API to transform cross border taxes and rates data for downstream systems.`,
    ],
    skills: ["ReactJS", "NodeJS", "Apache Spark", "GoCD", "Temporal", "Scala"],
  },
  {
    company: "Avalara",
    role: "Software Engineer intern",
    from: "Mar 2020",
    to: "Jun 2020",
    description: [
      `Went through a 3 months bootcamp covering Scala, data processing with Akka Streams, Spark, Docker, and Kubernetes. I implemented Okta Authentication for one of our internal apps`,
      `Maintained internal and open-source Scala projects.`,
      `Contributed to managing our monthly data processing cycle.`,
    ],
    skills: [
      "NodeJS",
      "Docker",
      "Kubernets",
      "Javascript",
      "Scala",
      "Apache Spark",
    ],
  },
];
