import './Home.css';

function Home() {
    return (
        <div className="about-container">
            <section className="faq-container">
                <h1>Welcome to AntiStrike</h1>
                <h2>FAQ</h2>
                <h3>How to use?</h3>
                <p>Select season, then select division. Then search team.</p>
                <h3>How recent is the data?</h3>
                <p>Matches will be fetched and processed on a weekly interval</p>
                <h3>How long will data be available?</h3>
                <p>I plan on only keeping 2 seasons worth of data at a time.</p>
            </section>
        </div>
    )
}

export default Home;