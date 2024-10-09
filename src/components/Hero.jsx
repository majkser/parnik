import heroImg from "../assets/photos/parnik+-9.jpg";

export default function Hero() {
    return (
        <>
        <div>
            <img src={heroImg} alt="hero image" className="w-full h-screen object-cover" />
        </div>
        </>
    );
}