import React, { useEffect, useState } from "react";
import { FishList } from "../fishlist/Fishlist";

export function Home() {
  const [fishes, setFishes] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://acnhapi.com/v1/fish/")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setFishes(data);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1 className="font-bold m-10">Home page</h1>
      {error && <div>{error}</div>}
      {isPending && (
        <div
          className="inline-block w-24 h-24 
            border-8 
            border-t-amber-500 
            border-r-blue-500 
            border-b-rose-500 
            border-l-green-500 
            rounded-full 
            animate-spin"
        ></div>
      )}
      {fishes && <FishList fishes={fishes} />}
    </div>
  );
}
