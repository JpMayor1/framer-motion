import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.div
            variants={{
                defaultBg: {
                    backgroundColor: "#912BBC",
                },
                changeBg: {
                    backgroundColor: "#FEFAF6",
                },
            }}
            animate={scrolled ? "changeBg" : "defaultBg"}
            className="sticky top-0 h-[88px] w-full px-24"
        >
            <nav className="w-full h-full flex items-center justify-between">
                <div>
                    <h1
                        className={`${
                            scrolled ? "text-purple" : "text-white"
                        } text-2xl font-extrabold`}
                    >
                        Logo
                    </h1>
                </div>
                <ul
                    className={`${
                        scrolled ? "text-purple" : "text-white"
                    } flex items-center justify-center gap-4 text-sm`}
                >
                    <li>Industry Solutions</li>
                    <li>About Us</li>
                    <li>People</li>
                    <li>Resources</li>
                    <li>News and Updates</li>
                    <button
                        className={`${
                            scrolled
                                ? "text-white bg-purple hover:bg-purple/90"
                                : "text-purple bg-white hover:bg-white/90"
                        } border-none px-8 py-2 rounded-full`}
                    >
                        Get In Touch
                    </button>
                </ul>
            </nav>
        </motion.div>
    );
};

export default Navbar;
