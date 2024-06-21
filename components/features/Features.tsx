"use client";

import Image from "next/image";
import { featuresProps } from "@/constatnts/index";

import "./features.css";

const Features = () => {
    return (
        <div className='features bg-features-bg theme-padding' >
            <div className='features-content'>
                {featuresProps.map((feature, idx) => {
                    return (
                        <div key={idx} className='feature-each-content' data-testid="feature-element">
                            <Image src={feature.icon} alt="feature-icon" width={52} height={48} className="mb-4" />
                            <div className="uppercase font-normal font-poppins">{feature.header}</div>
                            <div className="uppercase font-medium text-[30px] font-oswald">{feature.stat()}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features