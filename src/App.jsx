import { useEffect, useState } from "react";
import JokeCard from "./components/JokeCard";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
      );

      const data = await response.json();

      setJoke(data.data.content);
    } catch (error) {
      console.log(error);
      setJoke("Failed to load joke 😢");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Joke Generator</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <JokeCard joke={joke} />
        )}

        <button onClick={fetchJoke}>
          New Joke
        </button>
      </div>
    </div>
  );
}

export default App;