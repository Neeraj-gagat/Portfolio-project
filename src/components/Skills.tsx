import { motion } from "framer-motion";


export const Skills = () => {
    const skillsarr:string[] = [
  "Java",
  "Next.js",
  "TypeScript",
  "React.js",
  "Hono",
  "JavaScript",
  "AWS",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "TurboREPO",
  "Prometheus",
  "Grafana",
  "GraphQL",
  "OpenAPI Specification",
  "Database Optimization",
  "Data Structures",
  "Algorithms",
  "Cloudflare Workers",
  "MongoDB",
  "Zod",
  "JWT",
  "SQL",
  "HTML",
  "CSS",
  "Prisma",
  "PostgreSQL",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "noSQL",
  "Recoil",
  "Redux",
  "kafka",
  "Serverless Backends",
  "ExpressJS",
  "REST APIs",
  "Framer Motion",];

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.03 * index,
      },
    }),
  };
    
    return <div id="skills" className="flex justify-center">
                <div className="mb-28 justify-center max-w-[53rem] scroll-mt-28 text-center sm:mb:40">
                    <div className="text-4xl font-serif"> My Skills</div>
                        <div className=" mt-12">
                            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                                {skillsarr.map((skill, index) => (
                                    <motion.li
                                    className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:bg-gray-100 transition-colors duration-200 cursor-default"
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                    once: true,
                                    }}
                                    custom={index}
                                    >
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                </div>
            </div>
}