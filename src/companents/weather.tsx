import { useState } from "react";

interface WeatherState {
  city: string;
  temperature: number;
  isRaining: boolean;
}

function App() {
  const [weather, setWeather] = useState<WeatherState>({
    city: "Tashkent",
    temperature: 20,
    isRaining: false,
  });

  return (
    <div>
      <h2>{weather.city}</h2>
      <p>Temp: {weather.temperature}°C</p>
      <p>Raining: {weather.isRaining ? "Yes" : "No"}</p>

      <button
        onClick={() =>
          setWeather({
            ...weather,
            temperature: weather.temperature + 1,
          })
        }
      >
        +1°C
      </button>

      <button
        onClick={() =>
          setWeather({
            ...weather,
            temperature: weather.temperature - 1,
          })
        }
      >
        -1°C
      </button>

      <button
        onClick={() =>
          setWeather({
            ...weather,
            isRaining: !weather.isRaining,
          })
        }
      >
        Rain Toggle
      </button>
    </div>
  );
}

export default App;