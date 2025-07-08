"use client";

import React, { useEffect, useState } from "react";

export default function TypeWriter({ fullText }: { fullText: string }) {
    const [text, setText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 500); 

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <h1 className="text-2xl md:text-5xl font-semibold text-white relative font-mono">
            {text}
            <span className="typewriter-cursor ml-1 h-[24px] md:h-[48px]" />
        </h1>
    );
}
