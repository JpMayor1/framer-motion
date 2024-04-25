import TypingEffect from "./animations/TypingEffect";

const Hero = () => {
    const texts = [
        "Hello, I'm James Phillip A. Mayor",
        "I'm a Full-Stack Web Developer.",
        "I'm Practicing Framer Motion.",
    ];
    return (
        <div className="h-screen w-full bg-purple flex justify-center items-center">
            <h1 className="text-3xl text-white">
                <TypingEffect texts={texts} />
            </h1>
        </div>
    );
};

export default Hero;
