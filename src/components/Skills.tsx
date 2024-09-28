import { motion } from "framer-motion";


export const Skills = () => {
    const skillsarr:string[] = [
  "Git",
  "Java",
  "Zod",
  "JWT",
  "SQL",
  "HTML",
  "CSS",
  "AWS",
  "Hono",
  "noSQL",
  "Recoil",
  "CI/CD",
  "Docker",
  "Redux",
  "kafka",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Grafana",
  "GraphQL",
  "Prisma",
  "TypeScript",
  "React.js",
  "JavaScript",
  "Kubernetes",
  "TurboREPO",
  "Prometheus",
  "ExpressJS",
  "REST APIs",
  "Algorithms",
  "Tailwind CSS",
  "PostgreSQL",
  "Framer Motion",
  "Data Structures",
  "Serverless Backends",
  "OpenAPI Specification",
  "Cloudflare Workers",
  "Database Optimization",];

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