import photo1 from "../assets/photos/pierogi.jpg";
import photo2 from '../assets/photos/meanu.jpg'

export default function Main() {
    return (
        <main className="my-56 h-screen bg-white text-black">
            <section className="w-full my-20">
                <h2 className="absolute left-1/3 z-10 text-center">PIEROŻKI</h2>
                <div className="w-full flex items-center justify-around relative z-20">
                    <img src={photo1} className="w-1/3 h-auto rounded-lg shadow-lg" />
                    <h3 className="text-center">Jakis text</h3>
                </div>
            </section>
            <section className="w-full my-20">
                <h2 className="absolute right-1/2 z-10 text-center">ZUPY</h2>
                <div className="w-full flex items-center justify-around relative z-20">
                    <h3 className="text-center">Jakis text</h3>
                    <img src={photo1} className="w-1/3 h-auto rounded-lg shadow-lg" />
                </div>
            </section>

        </main>
    );
}