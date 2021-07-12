import React, { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";
import CorporateTable from "./CorporateTable";
import CorporateTabletw from "./CorporateTabletw";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {connect, useDispatch} from "react-redux"
import { corporateAction, newCorporateAction ,getcorporateData } from "../redux/action/action";
import { RootState } from "../redux/rootReducers/rootReducers";


function Corporate(corporatestat:any ) {
  const [corporateData, setCorporateData] = useState([]);
  const [corporateDatatw, setCorporateDatatw] = useState([]);
  const dispatch = useDispatch()
  
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

  useEffect(() => {
    dispatch(getcorporateData(corporatestat))
  }, [])
  


  useEffect(() => {
    corporateData.forEach((item: any, index:any , array:any) =>
      console.log("item :", item)
    )
  }, []);

  



  

  return (
    <div className="Corporate text-center">
      <div>
        <Router>
          <Switch>
            <Route exact path="/corporate">
              <CorporateTable corporateData={corporateData} />
            </Route>
            <Route exact path="/page2">
              <CorporateTabletw  corporateDatatw={corporateDatatw} />
            </Route>
          </Switch>
        <Pagination />
        </Router>
      </div>
    </div>
  );
}

const MapStateProps = (state: RootState) => {
  return {
    corporatestat: state.corporate
    
  }
}

export default connect(MapStateProps,null)(Corporate);
