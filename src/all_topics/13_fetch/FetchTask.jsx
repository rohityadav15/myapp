import React, { useEffect, useState } from "react";

const FetchTask = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  //To store API data
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [allStatesData, setAllStatesData] = useState([]);
  const [allCities, setAllCities] = useState([]);

  // to enable / disable select tag
  const [isStateDisable, setIsStateDisable] = useState(true);
  const [isCityDisable, setIsCityDisable] = useState(true);

  const [userData , setUserData]= useState({
    country:"",
    state:"",
    city:"",
  })

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
      console.log(stateData);
      setAllStatesData(stateData);
    }
    getAllState();
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedState) return;
    setIsCityDisable(fales);
    async function getAllcities() {
      let resp = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
      );
      let cityData = await resp.json();
      setAllCities(cityData);
    }
    getAllcities();
  }, [selectedState]);

  useEffect(()=>{
    if(!selectedCity) return
    setUserData({
      country:selectedCountry,
      state:selectedState,
      city: selectedCity,
    })
  },[])
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
          {allCities.map((cityName, idx) => {
            return (
              <option value={cityName} key={idx}>
                {cityName}
              </option>
            );
          })}
        </select>
      </section>
      {!selectedCity ? null :<h1>Country:{userData.country} State: :{userData.state} City:{userData.city} </h1>}
    </div>
  );
};

export default FetchTask;
