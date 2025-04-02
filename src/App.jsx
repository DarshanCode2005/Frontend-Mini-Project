import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchQuote = async () => {
        try {
            const response = await fetch("https://server-7a3r.onrender.com/random-quote");
            const data = await response.json();
            setQuote(`${data[0].q}`); // Extract quote
            setAuthor(`${data[0].a}`);

        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div>
            <h1>Random Quote Generator</h1>
            <section className="quote-container">
                  <h3>{quote || "Loading quote..."}</h3>
                  <p>{`- ${author}`||"Loading Author..."}</p>
            </section>
            <button onClick={fetchQuote}>Get New Quote</button>
        </div>
    );
}

export default App;
