import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Card = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://ap-countries-api.vercel.app/name/${countryName}`)
        .then((res) => res.json())
        .then((data) => setCountry(data.data[0]));
    };
    fetchData();
  }, [countryName]);

  console.log(country);

  return (
    <div className="w-full mt-5 p-5">
      {country && (
        <>
          <button
            onClick={() => navigate(-1)}
            className="mt-5 p-2 flex items-center ml-7"
          >
            <IoArrowBackOutline /> Back
          </button>

          <div className="flex items-end gap-5 ml-7">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-[400px] h-[250px] rounded mt-15"
            />

            <div className="w-full ">
              <h1 className="text-2xl font-bold mt-4">{country.name.common}</h1>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Native Name:</strong> {country.name.official}
              </p>
              <p>
                <strong>Region :</strong> {country.region}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
