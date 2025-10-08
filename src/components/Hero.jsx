import "./Hero.css";

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Hola, soy <span className="name-style">Mariano Morini</span></h1>
                <p className="hero-subtitle">Desarrolador Front-End especializado en crear experiencias web modernas y atractivas</p>
                <a href="#contact">
                    <button className="hero-cta">Contactame</button>
                </a>
            </div>
        </section>
    )
}

export default Hero;