import { useState } from "react";
import { add } from "../logic/stringCalculator";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      setError("");
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-2">String Calculator</h2>
      <textarea
        rows={3}
        className="w-full border p-2"
        placeholder="Enter numbers e.g. 1,2\n3 or //;\n1;2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Calculate
      </button>
      {result !== null && <p className="mt-2 text-green-700">Sum: {result}</p>}
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
}
