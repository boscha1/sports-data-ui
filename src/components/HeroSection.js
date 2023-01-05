import React from 'react';

const HeroSection = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:textleft">
                        Bring everyone together
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;