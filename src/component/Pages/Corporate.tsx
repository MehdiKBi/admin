import React, { useEffect, useState } from "react";
import CorporateTable from "./CorporateTable";

function Corporate() {
  const [corporateData, setCorporateData] = useState([]);
  useEffect(() => {
    fetch("https://api.corplife.at/v0/corporates?getAll=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0]);
        setCorporateData(data[1].domain);
      });
  }, []);
  

  return (
    <div className="Corporate bg-info text-center">
        <CorporateTable/>
    </div>
  );
}

export default Corporate;
