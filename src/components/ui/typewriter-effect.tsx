"use client";

import { motion } from "framer-motion";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split words into characters with stable unique IDs
  const wordsArray = words.map((word, idx) => {
    const wordText = word.text;
    const chars = wordText.split("").map((char, charIdx) => ({
      char,
      id: `char-${idx}-${charIdx}-${char}`,
    }));
    return {
      ...word,
      id: `word-${idx}-${wordText}`,
      chars,
    };
  });

  const renderWords = () => {
    return (
      <motion.div className="inline">
        {wordsArray.map((word) => {
          return (
            <div key={word.id} className="inline-block">
              {word.chars.map((charObj) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay:
                      wordsArray.indexOf(word) * 0.5 +
                      word.chars.indexOf(charObj) * 0.05, // Staggered delay for typing effect
                    ease: "easeInOut",
                  }}
                  key={charObj.id}
                  className={word.className}
                >
                  {charObj.char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-cyan-500 ml-1 translate-y-1 ${cursorClassName}`}
      />
    </div>
  );
};
