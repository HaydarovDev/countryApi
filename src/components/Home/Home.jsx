import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const [apiValue, setApiValue] = useState([]);
  const [filteredCountryValue, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ap-countries-api.vercel.app/all?sort=title&order=desc"
        );
        const data = await response.json();
        setApiValue(data.data.slice(0, 8));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  console.log(apiValue);

  const filtered = apiValue.filter((country) => {
    const searchCountry = country.name.common
      .toLowerCase()
      .includes(value.toLowerCase());
    const selectCountry =
      filteredCountryValue === "all" || country.region === filteredCountryValue;
    return searchCountry && selectCountry;
  });

  return (
    <>
      <Nav setValue={setValue} setFilter={setFilter} />
      <div className="flex flex-wrap justify-center gap-20 mt-10 mb-10">
        {filtered.length > 0 ? (
          filtered.map((value, index) => {
            return (
              <Link
                to={`/card/${value.name.common}`}
                key={index}
                className="w-[300px] rounded overflow-hidden shadow-sm cursor-pointer"
              >
                <div
                  key={index}
                  className="w-[300px] rounded overflow-hidden shadow-sm cursor-pointer"
                >
                  <img
                    className="w-full h-[180px]"
                    src={value.flags.png}
                    alt=""
                  />
                  <div className="p-5">
                    <h2 className="font-bold text-xl mt-2 mb-2">
                      {value.name.common}
                    </h2>
                    <p className="font-semibold">
                      Population:
                      <span className="font-light">{value.population}</span>
                    </p>
                    <p className="font-semibold">
                      Region: <span className="font-light">{value.region}</span>
                    </p>
                    <p className="font-semibold">
                      Capital:{" "}
                      <span className="font-light">{value.capital}</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>Not found country</h1>
        )}
      </div>
    </>
  );
};

export default Home;
