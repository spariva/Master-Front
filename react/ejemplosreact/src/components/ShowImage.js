import luna from '../assets/images/luna.jpg';

export function ShowImage() {
    return (
        <>
            <img
                src="../assets/images/luna.jpg" width={400} alt="Este no funciona"
            />
            <img
                src={luna} width={400} alt="Así sí funciona"
            />
            <img
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
        </>
    );
}