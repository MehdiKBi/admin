import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"

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
    <div className="Corporate text-center shadow-lg p-3 mb-5 bg-body rounded">
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
                <td key={y.domain}>{y.domain}</td>
                <td key={y.mailRestrictions}>{y.mailRestrictions}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Corporate;
