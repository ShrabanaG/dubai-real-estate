import Image from "next/image";
import Logo from "../../public/assets/Logo.png"
import MenuIcon from "../../public/assets/menu-icon.png";
import "./header.css";

const Header = () => {
    return (
        <div className='header bg-header-image bg-no-repeat w-full h-[500px] bg-full theme-padding'>
            <div className='header-logo-container'>
                <Image src={Logo} alt="logo" className='header-logo' />
                <button className="header-btn">Enquire Now</button>
                <div className="header-content-mobile">
                    <Image src={MenuIcon} alt="menu-icon" width={24} height={12} />
                </div>
            </div>

            <div className="header-content">
                <div className="content1">
                    <div className="content1-header fade-in">
                        Harbour Lights <br /> de <span>GRESOGONO</span>
                    </div>
                    <div className="content1-subheader pb-8 fade-in delay-2s">
                        1, 2 & 3 Bedrooms Seaside Apartments <br />in Dubai Maritime City
                    </div>
                    <div className="bg-sub-header border-l-[3px] border-primaryColor mb-3 slide-in">
                        <div className="sub-header p-2 font-light">Rental Returns of
                            <span className="font-bold ml-2">UPTO 11%</span>
                        </div>
                    </div>
                    <div className="bg-sub-header border-l-[3px] border-primaryColor slide-in">
                        <div className="sub-header p-2 font-light">Capital Appreciation of
                            <span className="font-bold ml-2">UPTO 32%</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content2 bg-sub-header-content2 rounded-t-[14px]">
                        <div className="header1 uppercase font-poppins text-[0.7rem] font-extralight tracking-wide">Pricing Starts From</div>
                        <div className="header1-stat font-bold font-oswald text-[48px]">$ 425,000</div>
                        <div className="sub-header1 text-[24px] font-oswald font-extralight">AED 1.3 Million</div>
                        <button className="content2-btn">Get a presentation</button>
                        <div className="border-borderColor border-[1px] divider-card" />
                    </div>
                    <div className=" bg-sub-header-content2 rounded-[14px] content3">
                        Get an Expert’s Presentation of Real <br /> Estate in Dubai for Life and investment
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header