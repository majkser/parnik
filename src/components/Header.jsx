import logo from "../assets/logo.jpg";
import "../index.css"

export default function Header({hrefMap}) {

    const aStyle = "relative text-white text-center text-xl py-2 px-4 ml-10 mr-10 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0";

    return (
        <header className="flex justify-around items-center  p-2 bg-black w-full fixed top-0 z-50">
            <img className="object-cover w-28" src={logo} alt="logo" />
            <nav>
                <ul className="flex justify-center items-center">
                    <li>
                        <a className={aStyle} href="">Home</a>
                    </li>
                    <li>
                        <a className={aStyle} href="">Menu</a>
                    </li>
                    <li>
                        <a className={aStyle} href="">Home</a>
                    </li>
                    <li>
                        <a className={aStyle} href={hrefMap}>Lokalizacja</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}