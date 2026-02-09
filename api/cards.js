export default async function handler(req, res) {
  const API_KEY = 'pokeprice_free_67abf1594acce302cdbaaf1339c9234cbc402f5726e95cd7';
  const API_URL = 'https://www.pokemonpricetracker.com/api/v2/cards?set=sv-black-bolt&limit=100';

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');

  try {
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json'
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
