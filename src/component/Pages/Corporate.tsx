import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
import Pagination from "../pagination/pagination";

function Corporate() {
  const [corporateData, setCorporateData] = useState([]);
  useEffect(() => {
    fetch("https://api.corplife.at/v0/corporates?limit=8&skip=0")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setCorporateData(data.data);
      });
  }, []);

  return (
    <div className="Corporate text-center">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Domain</th>
              <th scope="col">Mail restrictions</th>
            </tr>
          </thead>
          <tbody>
            {corporateData.map((y: any) => (
              <motion.tr
                animate={{opacity:[0.40,1]}}
              >
                <td key={y.name}>{y.name}</td>
                <td key={y.dodomainmain}>{y.domain}</td>
                <td key={y.mailRestrictions}>{y.mailRestrictions}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <Pagination/>
      </div>
    </div>
  );
}

export default Corporate;
