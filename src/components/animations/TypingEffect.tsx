import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ texts }: { texts: string[] }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentTextPos, setCurrentTextPos] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let intervalId: number;

        const startTyping = () => {
            intervalId = setInterval(() => {
                if (currentTextPos < texts[currentTextIndex].length) {
                    setDisplayText(
                        (prev) => prev + texts[currentTextIndex][currentTextPos]
                    );
                    setCurrentTextPos((prev) => prev + 1);
                } else {
                    clearInterval(intervalId);

                    setTimeout(() => {
                        setShowCursor(false);
                        setTimeout(() => {
                            setDisplayText("");
                            setShowCursor(true);
                            setCurrentTextPos(0);
                            setCurrentTextIndex(
                                (prevIndex) => (prevIndex + 1) % texts.length
                            );
                        }, 500);
                    }, 800);
                }
            }, 90);
        };

        startTyping();
        return () => clearInterval(intervalId);
    }, [currentTextIndex, currentTextPos, texts]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block" }}
        >
            {displayText}
            {showCursor && "|"}
        </motion.span>
    );
};

export default TypingEffect;
