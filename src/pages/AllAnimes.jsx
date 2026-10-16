import { Cards } from "../components/Cards";

export const AllAnimes = () => {
  return (
    <section className="p-5 w-dvw h-[95dvh] border flex flex-wrap gap-5 overflow-hidden items-center justify-center">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <button className="text-text-primary">See All {'>'}</button>
    </section>
  );
};
