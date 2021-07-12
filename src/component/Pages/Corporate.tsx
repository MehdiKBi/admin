import React, { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";
import CorporateTable from "./CorporateTable";
import CorporateTabletw from "./CorporateTabletw";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { RootState } from "../redux/rootReducers/rootReducers";
import axios from "axios";
import { getcorporateData } from "../redux/action/action";

function Corporate(corporatestat: any) {
  const [corporateData, setCorporateData] = useState([]);
  const [corporateDatatw, setCorporateDatatw] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("https://api.corplife.at/v0/corporates?limit=30&skip=0")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCorporateData(data.data.slice(0, 8));
  //       setCorporateDatatw(data.data.slice(9, 17));
  //     });
  // }, []);

  // const fetchData = async () => {
  //   const fulUrl= "https://api.corplife.at/v0/corporates?limit=30&skip=0"
  //   const response =  axios
  //     .get(fulUrl)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   console.log(response);
  //   dispatch(getcorporateData(response))
  // }

  // useEffect(() => {
  //   fetchData()
  // },[])

  useEffect(() => {
    dispatch(getcorporateData(corporatestat));
    const toMap = corporatestat.corporatestat.corporate.slice(0, 7);
    const toMapTwo = corporatestat.corporatestat.corporate.slice(8,16);
    setCorporateData(toMap)
    setCorporateDatatw(toMapTwo)


  },[]);


  

  // useEffect(() => {
  //   corporateData.forEach((item: any, index: any, array: any) =>
  //     console.log("item :", item)
  //   );
  // }, []);



  

  return (
    <div className="Corporate text-center">
      <div>
        <Router>
          <Switch>
            <Route exact path="/corporate">
              <CorporateTable corporateData={corporateData} />
            </Route>
            <Route exact path="/page2">
              <CorporateTabletw corporateDatatw={corporateDatatw} />
            </Route>
          </Switch>
          <Pagination corporatestat={corporatestat} />
        </Router>
      </div>
    </div>
  );
}

const MapStateProps = (state: RootState) => {
  return {
    corporatestat: state.corporate,
  };
};

export default connect(MapStateProps, null)(Corporate);
