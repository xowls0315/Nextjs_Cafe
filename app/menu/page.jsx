import { API } from "@/constants/apis";
import Panel from "@/components/menu/Panel/Panel";

const Page = async () => {
  const responses = await Promise.all(API.map((url) => fetch(url)));
  const [coffees, beers, wines] = await Promise.all(
    responses.map((res) => res.json())
  );
  const filteredBeers = beers.filter(
    (v) => v.name && v.price && v.rating && v.image
  );
  return (
    <>
      <Panel coffees={coffees} wines={wines} beers={filteredBeers} />
    </>
  );
};

export default Page;
