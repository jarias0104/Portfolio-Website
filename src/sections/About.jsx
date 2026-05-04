import React from "react";
import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const grid2Container = useRef();
    return (
        <section id="about" className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div 
            className="grid grid-cols-1 gap-4 md:grid-cols-6
            md:auto-rows-[18rem] mt-12"
            >
                {/* grid 1*/}
                <div className="flex items-end grid-default-color grid-1">
                    <img 
                    src="assets/coding-pov.png"
                    className="absolute scale-[1.75] -right-20 -top-
                    0[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-
                    [2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Jeshua Arias</p>
                        <p className="subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                            blanditiis fugit libero in repellendus reprehenderit suscipit,
                            dolores consequatur dolore mollitia id cum enim labore nostrum beatae accusamus earum aut expedita.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none
                    -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo"
                    />
                </div>
                {/* grid 2*/}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl
                        text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card 
                            style={{ rotate: "75deg", top: "30%", left: "20%"}}
                            text="GRASP"
                            containerRef={grid2Container}
                        />
                        <Card 
                            style={{ rotate: "-30deg", top: "60%", left: "45%"}}
                            text="SOLID"
                            containerRef={grid2Container}
                        />
                        <Card 
                            style={{ rotate: "90deg", bottom: "30%", left: "70%"}}
                            text="Design Patterns"
                            containerRef={grid2Container}
                        />
                        <Card 
                            style={{ rotate: "-45deg", top: "55%", left: "0%"}}
                            text="Design Principles"
                            containerRef={grid2Container}
                        />
                        <Card 
                            style={{ rotate: "20deg", top: "10%", left: "38%"}}
                            text="SRP"
                            containerRef={grid2Container}
                        />
                        <Card 
                            style={{ rotate: "30deg", top: "70%", left: "70%"}}
                            image="/assets/logos/python.svg"
                            containerRef={grid2Container}
                        />
                        <Card 
                            style={{ rotate: "-45deg", top: "70%", left: "25%"}}
                            image="/assets/logos/react.svg"
                            containerRef={grid2Container}
                        />
                        <Card 
                            style={{ rotate: "-45deg", top: "5%", left: "10%"}}
                            image="/assets/logos/visualstudiocode.svg"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* grid 3*/}
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headext">Time Zone</p>
                        <p className="subtext">
                            I'm based in the Mars, and open to remote work worldwide
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* grid 4*/}
                <div className="grid-4 bg-blue-950 text-white p-4 rounded-lg">
                    <div className="flex flex-col items-center
                    justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* grid 5*/}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext">I work with a diverse set of programming languages, 
                            frameworks, and tools that enable me to develop reliable, efficient, and scalable applications.
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full
                    h-full inset-s-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;