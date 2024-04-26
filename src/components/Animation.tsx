import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Animation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.6,
    });

    return (
        <div
            ref={ref}
            className="h-screen w-full bg-purple flex justify-center items-center gap-3"
        >
            <motion.div
                className="h-[80%] w-[40%] flex items-center justify-center bg-black"
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                animate={{
                    x: isInView ? 0 : -100,
                    opacity: isInView ? 1 : 0,
                }}
            >
                <h1 className="text-3xl text-white">Box 1</h1>
            </motion.div>

            <motion.div
                className="h-[80%] w-[40%] flex items-center justify-center bg-black"
                initial={{
                    x: 100,
                    opacity: 0,
                }}
                animate={{
                    x: isInView ? 0 : 100,
                    opacity: isInView ? 1 : 0,
                }}
            >
                <h1 className="text-3xl text-white">Box 2</h1>
            </motion.div>
        </div>
    );
};

export default Animation;
