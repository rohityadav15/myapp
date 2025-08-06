import React, { useEffect, useState } from "react";

const FetchTask = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  //To store API data
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [allStatesData, setAllStatesData]=useState([])

  // to enable / disable select tag
  const [isStateDisable, setIsStateDisable] = useState(true);
  const [isCityDisable, setIsCityDisable] = useState(true);

  useEffect(() => {
    async function getAllCountries() {
      let resp = await fetch(
        "https://crio-location-selector.onrender.com/countries"
      );
      let countriesData = await resp.json();
      setAllCountriesData(countriesData);
    }
    getAllCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;
    setIsStateDisable(false);
    async function getAllState() {
      let resp = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
      );
      let stateData = await resp.json();
      console.log(stateData)
      setAllStatesData(stateData)
    }
    getAllState();
  }, [selectedCountry]);
  return (
    <div>
      <h1>FetchTAsk -1</h1>
      <section>
        <select
          name="country"
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="" disabled>
            select country
          </option>
          {allCountriesData.map((countryName, idx) => {
            return (
              <option value={countryName} key={idx}>
                {countryName}
              </option>
            );
          })}
        </select>
        <select
          name="state"
          id="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={isStateDisable}
        >
          <option>Select State</option>
          {allStatesData.map((stateName, idx) => {
            return (
              <option value={stateName} key={idx}>
                {stateName}
              </option>
            );
          })}
        </select>
        <select
          name="city"
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={isCityDisable}
        >
          <option>Select City</option>
        </select>
      </section>
    </div>
  );
};

export default FetchTask;
