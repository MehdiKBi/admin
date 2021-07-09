import React, { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";


function CheckList() {
  const [checklisteData, setChecklistData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api-dev.corplife.at/v0/corplife/checklists?skip=0&sortBy=name&limit=16"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setChecklistData(data.data.slice(0,8));
      });
  },[]);
const x = "i am p"
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">partner</th>
              <th scope="col">offer</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
          {checklisteData.map((y: any) => (
            <tr>
                <td key={y.partner}>{y.partner}</td>
                <td key={y.offer}>{y.offer}</td>
              <td key={y.status}>{y.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination/>
      </div>
    </div>
  );
}

export default CheckList;
