import React, { useEffect, useState } from "react";

const FetchCountries = () => {
  const [countries, setCoutries] = useState([]);

  async function getCountries() {
    let resp = await fetch(" https://xcountries-backend.azurewebsites.net/all");
    let data = await resp.json();
    console.log(data);
    setCoutries(data);
  }

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <h1>fetchCountries</h1>
      <section>
        {countries.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          countries.map((country, idx) => {
            return (
              <div key={idx}>
                <img
                  src={country.flag}
                  alt={country.abbr}
                  height={100}
                  width={100}
                />
                <h2>{country.name}</h2>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default FetchCountries;
