import Logo from '../../assets/images/logo.png'
import Award from '../../assets/images/award.png'
import Group from '../../assets/images/group.png'
import Pump from '../../assets/images/pump.png'
import '../LandingPage/Style.landingPage.css';

const LandingPage = () => {
    const text = `'C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION
     AWARD 2018 for the 4th time.'`;

    const list = `C.R.I.'s energy efficient products are well 
     recognized by various Government Institutions, as trustworthy 
     products for various projects across the globe to save energy.`;

    const listTwo = `C.R.I. is the highest contributor in the country 
     for the projects of EESL (Energy Efficiency Services Limited) to 
     replace the old inefficient pumps with 5 Star rated energy efficient 
     smart pumps with IoT enabled control panel.`;

    const textTwo = `INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE
     COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
      OF POWER FOR THE NATION. `;

    return (

        <div className="landing-page-container">
            <div className="landing-page-header">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="landing-page-main">
                <div className="left-content">
                    <img src={Award} alt="award" />

                </div>
                <div className="right-content">
                    <div className="head">
                        <h5>{text}</h5>
                    </div>
                    <div className="list-items">
                        <ul className='list items'>
                            <li>{list}</li>
                            <li>{listTwo}</li>
                        </ul>
                    </div>
                    <div className="landing-page-image">
                        <img src={Group} alt="group" />
                    </div>
                    <div className="img-details">
                        <p>Government of India has awarded the
                            <strong>"National Energy Conservation Award
                                2018"</strong>. Mr. G. Selvaraj, Joint Managing
                            Director of C.R.I. Group received the
                            award from Smt. Sumitra Mahajan, Speaker
                            of Lok Sabha & Shri. Raj Kumar Singh,
                            Honorable Minister of State.</p>
                    </div>



                </div>


            </div>
            <div className="bottom-content">
                <div className="bottom-text">
                    <p>{textTwo}</p>
                </div>
                <div className="bottom-img">
                    <img src={Pump} alt="pump" />
                </div>
                <div className="img-text">
                    <p> Valves - Pumps - Pipes - IoT Drives
                        & Controllers - Wires & Cables - Solar
                        Systems - Motors
                    </p>
                 
                </div>
                <div className="bottom-details">
                    <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                </div>
                <div className="details-two">
                    <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
                </div>
            </div>
        </div>

    );
}

export default LandingPage;