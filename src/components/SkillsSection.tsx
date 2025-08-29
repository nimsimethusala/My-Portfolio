import { motion, type Variants } from "framer-motion";

export function SkillsSection() {
    const frontendSkills = [
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "Redux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
    ];

    const backendSkills = [
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Express",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "GraphQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
    ];

    const toolsSkills = [
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        {
            name: "Jest",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        },
    ];

    // Animation variants
    const orbitVariants: Variants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    const orbitVariantsReverse: Variants = {
        animate: {
            rotate: -360,
            transition: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Creative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F3FF90]/10 to-white -z-10" />

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <motion.div
                    className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-[#9BEC00]/5"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-[#059212]/5"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute left-1/2 top-0 w-64 h-64 rounded-full border border-[#06D001]/10"
                    animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-1/4 bottom-1/4 w-40 h-40 bg-[#F3FF90]/20 rotate-45"
                    animate={{ rotate: [45, 90, 45] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        My <span className="text-[#059212]">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#9BEC00] mx-auto" />
                </motion.div>

                {/* Orbit Section */}
                <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[350px] md:h-[400px] mb-16">
                    {/* Central circle */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 w-24 h-24 bg-gradient-to-br from-[#059212] to-[#9BEC00] rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center shadow-xl"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-white font-bold text-lg">Skills</span>
                    </motion.div>

                    {/* Orbits */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2"
                        variants={orbitVariants}
                        animate="animate"
                    >
                        {frontendSkills.map((skill, index) => {
                            const angle = (index * 360) / frontendSkills.length * (Math.PI / 180);
                            const x = Math.cos(angle) * 175;
                            const y = Math.sin(angle) * 175;
                            return (
                                <motion.div
                                    key={skill.name}
                                    className="absolute w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group"
                                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.2, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                                    <span className="absolute whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity -bottom-8">
                    {skill.name}
                  </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        className="absolute left-1/2 top-1/2 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2"
                        variants={orbitVariantsReverse}
                        animate="animate"
                    >
                        {backendSkills.map((skill, index) => {
                            const angle = (index * 360) / backendSkills.length * (Math.PI / 180);
                            const x = Math.cos(angle) * 125;
                            const y = Math.sin(angle) * 125;
                            return (
                                <motion.div
                                    key={skill.name}
                                    className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group"
                                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.2, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-7 h-7" />
                                    <span className="absolute whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity -bottom-8">
                    {skill.name}
                  </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        className="absolute left-1/2 top-1/2 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2"
                        variants={orbitVariants}
                        animate="animate"
                    >
                        {toolsSkills.map((skill, index) => {
                            const angle = (index * 360) / toolsSkills.length * (Math.PI / 180);
                            const x = Math.cos(angle) * 75;
                            const y = Math.sin(angle) * 75;
                            return (
                                <motion.div
                                    key={skill.name}
                                    className="absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group"
                                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.9 + 0.1 * index }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.2, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                                    <span className="absolute whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity -bottom-8">
                    {skill.name}
                  </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Skills categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Frontend", color: "#059212" },
                        { title: "Backend", color: "#06D001" },
                        { title: "Tools", color: "#9BEC00" },
                    ].map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-1"
                                style={{ backgroundColor: category.color }}
                            />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                {category.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-0">
                                {category.title === "Frontend" &&
                                    "Creating responsive, interactive UIs with modern frameworks and libraries."}
                                {category.title === "Backend" &&
                                    "Building robust server-side applications with scalable architecture."}
                                {category.title === "Tools" &&
                                    "Utilizing industry-standard tools for development, testing, and deployment."}
                            </p>
                            <motion.div
                                className="absolute bottom-0 right-0 w-20 h-20 rounded-full -mb-10 -mr-10 opacity-10"
                                style={{ backgroundColor: category.color }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}