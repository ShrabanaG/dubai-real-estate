"use client";

import PaymentIcon from "../public/assets/payment_icon.svg";
import AreaIcon from "../public/assets/area_icon.svg";
import BookingIcon from "../public/assets/booking_icon.svg";
import HandsIcon from "../public/assets/hands_icon.svg";
import GymImage from "../public/assets/gym_image.jpg";
import PoolImage from "../public/assets/pool_amenities.jpg";
import CabinetImage from "../public/assets/cabinet_image.jpg";
import SwimmingPoolImage from "../public/assets/swimming_pool.jpg";
import GalleryImg1 from "../public/assets/gallery_img1.jpg";
import GalleryImg2 from "../public/assets/gallery_img2.jpg";
import GalleryImg3 from "../public/assets/gallery_img3.jpg";
import GalleryImg4 from "../public/assets/gallery_img4.jpg";
import GalleryImg5 from "../public/assets/gallery_img5.jpg";
import CountUp from "react-countup";

export const featuresProps = [
    {
        icon: BookingIcon,
        header: "Book With",
        stat: () => <>Only <CountUp end={20} />%</>
    },
    {
        icon: PaymentIcon,
        header: "Payment Plan",
        stat: () => <>Easy <CountUp end={70} />/<CountUp end={30} /></>
    },
    {
        icon: HandsIcon,
        header: "Handover On",
        stat: () => <>Q2 <CountUp separator="" end={2027} /></>
    },
    {
        icon: AreaIcon,
        header: "Area Starts From",
        stat: () => <><CountUp end={700} /> sqmt</>
    }
]

export const AmenitiesProps = [
    {
        image: PoolImage,
        header: "Floating",
        subheader: "Pool"

    },
    {
        image: CabinetImage,
        header: "Spacious Cabins",
        subheader: "Like Rooms"
    },
    {
        image: SwimmingPoolImage,
        header: "Sea Facing",
        subheader: "Swimming Pool"
    },
    {
        image: GymImage,
        header: "Gymnasium",
        subheader: "& Fitness"
    }
]

export const galleryImages = [GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5];

