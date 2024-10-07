export default function GoogleMap() {
    return (
        <>
            <div id="Map" className="w-full h-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.096745316549!2d21.766118612732246!3d54.036550972382884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1873c31db7a97%3A0x13b80f503e4d5205!2sParnik%2B!5e0!3m2!1spl!2spl!4v1728297642420!5m2!1spl!2spl"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}