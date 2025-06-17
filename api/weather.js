// Vercel serverless function
export default async function handler(req, res) {
  const { city } = req.query;
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
