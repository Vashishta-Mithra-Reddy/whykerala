// app/components/WeatherCompare.tsx
"use client";

import { useState } from "react";

const WeatherThingy = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "1e4329215ee74578b84124607252106"; 


  const fetchWeather = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setMessage("");

    try {
      const [keralaRes, userRes] = await Promise.all([
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Munnar`),
        fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(input)}`),
      ]);

      const keralaData = await keralaRes.json();
      const userData = await userRes.json();

      if (keralaData.error || userData.error) {
        setMessage("❌ Couldn’t find weather info for your place maybe a typo? check and try again.");
        return;
      }

      const keralaTemp = keralaData.current.temp_c;
      const userTemp = userData.current.temp_c;

      const keralaCity = keralaData.location.name;
      const userCity = userData.location.name;

      if (userTemp > keralaTemp) {
        setMessage(`🔥 It's hotter in ${userCity} (${userTemp}°C) than in ${keralaCity} (${keralaTemp}°C). Time to escape the heat! 🌴`);
      } else if (userTemp < keralaTemp) {
        setMessage(`🌞 Kerala’s warmer (${keralaTemp}°C) than ${userCity} (${userTemp}°C). Come soak in the sunshine! 🏖️`);
      } else {
        setMessage(`🌡️ Both ${userCity} and Kerala are equally warm at ${keralaTemp}°C. Match made in weather heaven! 🌤️`);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="my-10 mb-24">
    <div className="rounded-xl p-6 w-full max-w-md mx-auto font-satoshi">
      <h2 className="text-center font-satoshi text-5xl pb-16 text-whitex/95">Hmm, Weather?</h2>
            
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Where are you right now? (Enter your city)"
        className="text-center w-full px-4 py-3 rounded-xl border-2 transition-all duration-500 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 outline-none focus:ring-4 focus:ring-whitex focus:border-redx focus:border-2"
      />

      <button
        onClick={fetchWeather}
        className="mt-4 w-full bg-whitex hover:bg-whitex/80 cursor-pointer text-redx/95 py-3 rounded-xl disabled:opacity-80 disabled:cursor-not-allowed active:scale-95 disabled:active:scale-100 transition-all duration-500"
        disabled={loading || !input}
      >
        {loading ? "Waittttt..." : "Let's Find Out!"}
      </button>

      
    </div>
    {message && (
        <p className="mt-8 text-center text-2xl text-whitex/95 animate-fade duration-300">
          {message}
        </p>
      )}
    </section>
  );
};

export default WeatherThingy;
