import RedesSociales from '../RedesSociales/RedesSociales';
import Logo from '../../assets/logo.svg';
import './Footer.css';

function Footer() {

    return (
        <footer className="main-footer">
            <div className="copyright">
                <img src={Logo} alt="logo UniReview"/>
                <p>©2022 UniReview</p>
            </div>
            <RedesSociales />
        </footer>
    )
  }

export default Footer;
