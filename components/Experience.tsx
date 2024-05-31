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
    company: "SimpleAIpowered",
    role: "Software Engineer",
    from: "Jan 2023",
    to: "may 2023",
    description: [
      `Spearheaded the development of SimpleMail, an innovative email solution, attracting over 1000 active
      users in its first year`,
      `Designed and implemented Chrome extensions and Outlook Add-ins, incorporating AI-powered bots to
      increase productivity by 30%`,
      `Led the transition from a monolithic AWS architecture to a microservices framework, enabling horizontal
      server scaling for improved efficiency and reliability.",
    badge: "React"`,
    ` Developed AI bots using GPT-4 for API creation, contributing to a surge in user engagement with over 1k
    users in a few months, improving user retention by 40%`,
     ` Led a team in creating multiple webbots from scratch, focusing on scalability and efficient load
     balancing.`,
     `Focused on UI/UXdesign principles to make applications more engaging and user-friendly.`,
     `Proactively debugged and optimised the codebase to ensure high performance and reliability`,
     `Rapidly prototyped features to gather product feedback and iterate on user requirements`,
     `Developed all aspects of Chrome extensions and Outlook Add-in from scratch, architecting a robust
     server setup on AWS to support these innovations `,

    ],
    skills: ["AI Agents", "LLMs", "RAG",  "MySQL", "PostgreSQL", "AWS", "Next.js", "TypeScript", "Prisma"],
  },
  {
    company: "Sparklehood",
    role: "Software Developer Engineer (Intern)",
    from: "Mar 2022",
    to: "May 2022",
    description: [
      `Worked as a data mining engineer,extracting insights from multiple databases to create an optimised
      database, enhancing data analysis.`,
      `Developed a user-friendly website with WebFlow to centralise community interaction. `,
      ` Automated email workflows with Zapier, improving efficiency and contributing to a 20% increase in user
      retention.`,
      `Managed database operations using Airtable, streamlining project workflows.`,
      `Employed GoogleAMP in separate projects to boost community engagement.`
    ],
    skills: ["python","webflow","data-mining","html","css"],
  },
  {
    company: "Spectamatrix",
    role: "FrontEnd Developer (Intern)",
    from: "Sep 2021",
    to: "Dec 2021",
    description: [
      `Integrated stock and broker APIs into an AI/ML project, improving data accuracy and analysis for financial
      applications.`,
      ` Created dynamic client dashboards and real-time stock fluctuation charts, enhancing user experience
      and investment decision-making.`,
      ` Utilised Chrome Developer Tools for debugging and optimising web applications`,
    ],
    skills: ["ReactJS", "Typescript", "html","css","javascript"],
  },
 
];
