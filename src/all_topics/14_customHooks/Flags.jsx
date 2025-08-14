import React from "react";
import { useApi } from "./CustomHook";
import FlagCard from "./FlagCard";

const Flags = () => {
  let flagData = useApi(
    "https://crio-location-selector.onrender.com/countries"
  );
  console.log(flagData);
  return (
    <div>
      <h1>Flags</h1>

      <section>
        {flagData.length === 0 ? (
          <h1>Loading......</h1>
        ) : (
          flagData.map((ele, idx) => {
            return <FlagCard ket={idx} ele={ele}/>
             
          })
        )}
      </section>
    </div>
  );
};

export default Flags;
