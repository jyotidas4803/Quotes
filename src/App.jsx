import { useState } from "react";
import AddQuote from "@/components/AddQuote";
import ListQuotes from "@/components/ListQuote";

function App() {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      likes: 5,
      title: "Life is good!",
    },
    {
      id: 2,
      likes: 3,
      title: "Next.js is awesome!",
    },
  ]);

  const handleAddQuote = (title) => {
    // Create a new quote
    const quote = {
      title,
      id: crypto.randomUUID(),
      likes: 0,
    };

    // Add to new state
    setQuotes((prevQuotes) => [quote, ...prevQuotes]);
  };

  return (
    <div className="max-w-96 mx-auto p-2">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuote onSubmit={handleAddQuote} />
      <ListQuotes quotes={quotes} />
    </div>
  );
}

export default App;