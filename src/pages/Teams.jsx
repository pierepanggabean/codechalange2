import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getData } from "../lib/data";

const Teams = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res.results);
    });
  }, []);

  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center gap-16">
        {data.map((item, index) => (
          <div key={index}>
            <h1 className="flex justify-center pt-16">{item.name.first}</h1>
            <p className="flex justify-center py-2">{item.email}</p>
            <img
              className="m-auto py-2 rounded-full"
              src={item.picture.large}
              alt={item.name.first}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
