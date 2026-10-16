import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { getRandomAnimes } from "../API/animeAPI";

export const AllAnimes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [animes, setAnimes] = useState();
  useEffect(() => {
    async function getItems() {
      setIsLoading(true);
      try {
        const res = await getRandomAnimes(20);

        setAnimes(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("error fetching random animes", err);
        setError("Error Fetching Animes");
      } finally {
        setIsLoading(false);
      }
    }
    getItems();
  }, []);

  return (
    <section className="p-5 w-dvw h-[95dvh] border flex flex-wrap gap-5 overflow-hidden items-center justify-center">
      <button className="text-text-primary">See All {">"}</button>
    </section>
  );
};
