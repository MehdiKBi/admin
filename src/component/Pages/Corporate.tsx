import React, { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";
import CorporateTable from "./CorporateTable";
import CorporateTabletw from "./CorporateTabletw";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Corporate() {
  const [corporateData, setCorporateData] = useState([]);
  const [corporateDatatw, setCorporateDatatw] = useState([]);

  useEffect(() => {
    fetch("https://api.corplife.at/v0/corporates?limit=24&skip=0")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCorporateData(data.data.slice(0, 8));
        setCorporateDatatw(data.data.slice(9, 16));
      });
  }, []);

  return (
    <div className="Corporate text-center">
      <div>
        <Router>
          <Switch>
            <Route exact path="/corporate">
              <CorporateTable corporateData={corporateData} />
            </Route>
            <Route  path="/corporate/page2" >
              <CorporateTabletw  corporateDatatw={corporateDatatw} />
            </Route>
          </Switch>
        <Pagination />
        </Router>
      </div>
    </div>
  );
}

export default Corporate;
