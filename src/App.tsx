import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="flex space-x-4 mb-8">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className="transition duration-300 transform hover:scale-110"
        >
          <img
            src={viteLogo}
            className="h-24 p-6 transition filter hover:drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          className="transition duration-300 transform hover:scale-110"
        >
          <img
            src={reactLogo}
            className="h-24 p-6 transition filter hover:drop-shadow-lg"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl mb-8">Vite + React</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white text-lg font-semibold rounded focus:ring focus:ring-blue-200"
      >
        count is {count}
      </button>
      <p className="mt-4">
        Edit <code className="bg-gray-700 p-1 rounded">src/App.tsx</code> and
        save to test HMR.
      </p>
      <p className="mt-4 text-gray-500">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
