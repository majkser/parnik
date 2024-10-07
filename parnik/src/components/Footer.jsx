import phoneIcon from '../assets/icons/phone.svg';
import FbIcon from '../assets/icons/fbIcon.svg';
import IgIcon from '../assets/icons/igIcon.svg';

export default function Footer() {
    return (
        <footer className="w-full h-20 bg-black flex items-center justify-between">
            <div className="ml-10 flex items-center">
                <img src={phoneIcon} alt="phone icon" className="w-10 h-10 mr-4" />
                <p className="text-white text-xl">+48 692 585 510</p>
            </div>
            <div className="flex mr-10">
                <a className="mx-5" href="https://www.facebook.com/p/Parnik-Gi%C5%BCycko-100084387453756/?paipv=0&eav=AfYYDI4yHjGXUXFCqJzF_QP6WIjJw9V8yV8QuF_m5Ngv2nLbgsJHWYMXnUWDDkl1qWM&_rdr" target="_blank" rel="noopener noreferrer">
                    <img src={FbIcon} alt="facebook icon" className="img-spin" />
                </a>
                <a className="mx-5" href="https://www.instagram.com/parnikgizycko/" target="_blank" rel="noopener noreferrer">
                    <img src={IgIcon} alt="instagram icon" className="img-spin" />
                </a>
            </div>
        </footer>
    );
}