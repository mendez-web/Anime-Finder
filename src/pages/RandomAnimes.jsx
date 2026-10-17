import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { getRandomAnimes } from "../API/animeAPI";

export const AllAnimes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    async function getItems() {
      setIsLoading(true);
      try {
        const res = await getRandomAnimes(10);

        setAnimes(res.data);
        console.log(res.data);
      } catch (err) {
        setError("Error Fetching Animes");
      } finally {
        setIsLoading(false);
      }
    }
    getItems();
  }, []);

  return (
    <section className="p-5 w-full h-full border ">
      <div className="header-container px-25 py-5 ">
        <h1 className="text-5xl text-text-primary font-bold">Animes</h1>
      </div>
      <div className="anime-container flex flex-wrap gap-6 items-center justify-center w-full h-[90%]">
        {isLoading && <p>Loading...</p>}
        {error ? <p>{error}</p> : null}
        {animes.map((anime) => (
          <Cards img={anime.images.jpg.image_url} title={anime.title} />
        ))}
      </div>
      <div className="button-container w-full h-20 mt-15 p-5 flex justify-end items-center">
        <button className="text-btn-text rounded-lg h-15 text-40 w-50 border bg-btn-primary cursor-pointer hover:bg-secondary ">
          See All {">"}
        </button>
      </div>
    </section>
  );
};
