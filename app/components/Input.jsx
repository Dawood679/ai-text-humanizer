
"use client";
import  main  from "@/app/helpers/RequestToAiModel";
import { useState } from "react";

export default function Input() {
    const [text, setText] = useState("");
    const [response, setResponse] = useState("");
    const handlerequest = async() => {

        const value = await main(text);
        console.log('value from main ' + value);
        setResponse(value);
    }

return (
    <div className="flex flex-col gap-3 justify-center rounded-lg border border-gray-200 bg-black p-4 shadow-sm">
      <input
        type="text"
        placeholder="Enter text to humanize"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-200" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-   active:bg-blue-800" onClick={handlerequest}>
        Humanize
      </button>
      {response && (
        <div className="mt-4 rounded-md border border-gray-300 bg-gray-100 p-4 text-sm text-gray-800">
          <h3 className="mb-2 font-semibold">Humanized Text:</h3>
          <p>{response}</p>
        </div>
      ) }
    </div>
  );
}