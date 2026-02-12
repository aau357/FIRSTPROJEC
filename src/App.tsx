import { useState } from "react"
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (

    <div className="max-w-md mx-auto mt-20 bg-white dark:bg-gray-800
                rounded-2xl shadow-xl p-6">


      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Dark Mode UI
        </h2>

        <button
          onClick={() => {
            document.documentElement.classList.toggle('dark')
            setDarkMode(!darkMode)
          }}
          className="px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-700
                 text-gray-800 dark:text-gray-100 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Bu sahifa light va dark rejimga moslashadi.
      </p>

      <input
        type="text"
        placeholder="Username"
        className="w-full mb-4 px-4 py-2 rounded-lg
               bg-gray-100 dark:bg-gray-700
               text-gray-800 dark:text-gray-100
               placeholder-gray-400 dark:placeholder-gray-400
               focus:outline-none focus:ring-2
               focus:ring-blue-500 dark:focus:ring-blue-400"
      />

      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 mb-4">
        <p className="text-gray-700 dark:text-gray-200">
          Dark mode card
        </p>
      </div>


      <button
        className="w-full py-2 rounded-lg font-semibold
               bg-blue-600 dark:bg-blue-500
               text-white hover:opacity-90
               active:scale-95 transition"
      >
        Continue
      </button>

    </div>
  )
}

export default App