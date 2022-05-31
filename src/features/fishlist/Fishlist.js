import React from "react";
import "./Fishlist.scss";
export function FishList({ fishes }) {
  let fishlist = [];
  Object.keys(fishes).forEach((key, index) => {
    fishlist.push(fishes[key]);
  });
  function enlargeScaleOnHover(e) {
    e.target.style.transform = "scale(1.8)";
  }
  function shrinkScaleOnHover(e) {
    e.target.style.transform = "scale(1.3)";
  }

  return (
    <div className="w-5/6 flex justify-center md:flex flex-wrap mb-4 m-10 rounded mx-auto">
      {fishlist.map((fish) => (
        <div
          key={fish["id"]}
          className="fishContainer overflow-visible bg-orange-100 w-full md:w-1/4 m-5 rounded shadow-lg  relative flex flex-col"
        >
          <img
            className="fishPic absolute w-full"
            style={{ transform: "scale(1.3)" }}
            onMouseEnter={enlargeScaleOnHover}
            onMouseLeave={shrinkScaleOnHover}
            src={fish["image_uri"]}
            alt={fish["file-name"] + "'s pic"}
          />
          <div style={{ height: "167.5px" }}>&nbsp;</div>
          <div className="py-4">
            <div
              className="font-mono font-bold text-3xl mb-2"
              style={{ textTransform: "capitalize" }}
            >
              {fish["file-name"].replace("_", " ")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
