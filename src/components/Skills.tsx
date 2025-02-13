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
  "Redux",
  "CI/CD",
  "Docker",
  "Redis",
  "RabbitMQ",
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
    
    return <div id="skills" className="flex justify-center bg-customstag">
                <div className="mb-28 justify-center max-w-[53rem] scroll-mt-28 text-center sm:mb:40">
                    <div className="text-4xl font-semibold font-serif"> My Skills</div>
                        <div className=" mt-12">
                            <ul className="flex flex-wrap justify-center gap-2 text-sm md:text-base text-black">
                                {skillsarr.map((skill, index) => (
                                    <motion.li
                                    className="bg-customcream border-black/[0.1] rounded-full px-4 py-2 hover:bg-customcreamd transition-colors duration-200 cursor-default"
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