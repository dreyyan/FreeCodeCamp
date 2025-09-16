import { useState } from "react";
import Styles from "./Styles";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [text, setText] = useState("Press the button for a random quote...");
  const [author, setAuthor] = useState("N/A");
  const [newQuote, setNewQuote] = useState("");  
  const [tweetQuote, setTweetQuote] = useState("");

  // API key
  const API_KEY = import.meta.env.VITE_API_KEY as string;
  const URL = `https://api.api-ninjas.com/v1/quotes`;

  // Get random quote
  async function getRandomQuote() {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': API_KEY }
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      console.log(data);

      // After fetching, display quote information
      setText(data[0].quote);
      setAuthor(`-${data[0].author}`);

    } catch (error) {
      console.error("Error fetching quotes: ", error);
      setText('Failed to fetch quote...');
      setAuthor("");
    }
  }

  return (
    <div className={Styles.mainContainer}>
      <div id="quote-box" className={Styles.quoteBox}>
        <div className={Styles.textBox}><h2 id="text" className={Styles.text}>{text}</h2></div>
        <h3 id="author" className={Styles.author}>{author}</h3>
        <button id="new-quote" className={Styles.newQuote} onClick={getRandomQuote}>New Quote</button>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" className={Styles.tweetQuote}>
          Tweet <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default App;