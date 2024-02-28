import Logo from '../../assets/images/logo.png'
import Award from '../../assets/images/award.png'
import GroupPhoto from '../../assets/images/group-photo.png'
import Style from '../LandingPage/Style.landingPage.css';
const LandingPage = () => {
    const text = `'C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION
     AWARD 2018 for the 4th time.'`;
     const list = `C.R.I.'s energy efficient products are well 
     recognized by various Government Institutions, as trustworthy 
     products for various projects across the globe to save energy.`;
    
     const listTwo =  `C.R.I. is the highest contributor in the country 
     for the projects of EESL (Energy Efficiency Services Limited) to 
     replace the old inefficient pumps with 5 Star rated energy efficient 
     smart pumps with IoT enabled control panel.`;
     
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
                    <h5>{text}</h5>
                    <ul className='list items'>
                        <li>{list}</li>
                        <li>{listTwo}</li>
                    </ul>
                    <img src={GroupPhoto} alt="group-photo" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;