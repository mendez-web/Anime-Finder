const API_URL = "https://api.tenrai.org/v1/";

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchAnimes(path) {
  try {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) {
      throw new Error("Anime Request Failed");
    }
    const data = await res.json();
    console.log(data);
    await timeout(1000);
    return data;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
}

export function getPopularAnimes(amount = 15) {
  return fetchAnimes(`top/anime?filter=bypopularity&limit=${amount}`);
}

export function getRandomAnimes(amount = 15) {
  return fetchAnimes(`top/anime?limit=${amount}`);
}
