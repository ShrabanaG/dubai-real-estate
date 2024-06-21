"use client";

import { AmenitiesProps } from "@/constatnts/index";
import "./amenities.css";
import Image from "next/image";

const Amenities = () => {
    return (
        <div className='amenities theme-padding'>
            <div className='amenities-header'>
                Harbour <br /> Lights
            </div>
            <div className='sub-header'>de GRISOGONO</div>
            <div className="features-header mb-[1rem]">
                Features & Amenities
            </div>
            <div className="amenities-content  mb-[2rem]">
                Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront
                <br /> lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience,
                offering a <br />
                life of tranquility and bliss.
            </div>
            <div className="amenities-content-mobile-view  mb-[1rem]">
                Harbour Lights beautifully honours <br />maritime voyages while embracing <br />an opulent seafront
                lifestyle. Its <br />maritime-inspired amenities provide <br /> an unmatched seaside experience,<br />
                offering a
                life of tranquility and bliss.
            </div>
            <div className="amenities-card-container">
                {AmenitiesProps.map((each, idx) => {
                    return (
                        <div className="each-card" key={idx}>
                            <Image src={each.image} alt="card-image" width={206} height={200} className="rounded-full" />
                            <div className="card-header-container">
                                <div className="card-header font-poppins text-[14px] font-semibold text-featureColor">
                                    {each.header}
                                </div>
                                <div className="card-header font-poppins text-[14px] font-semibold text-featureColor">
                                    {each.subheader}
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className="amenities-footer mt-6">
                *T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2
            </div>
        </div>
    )
}

export default Amenities