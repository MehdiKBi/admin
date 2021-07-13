import Pagination from "../pagination/pagination";
import CorporateTable from "./CorporateTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducers/rootReducers";
import { getcorporateData } from "../redux/action/corporateAction";
import { useEffect } from "react";





function Corporate(corporatestat: any) {
  const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getcorporateData(0))
 }, []);

 const corporateList = corporatestat.corporatestat.corporate;
  
  
  return (
    <div className="Corporate text-center">
      <div>
        <Router>
          <Switch>
            <Route exact path="/corporate">
              <CorporateTable corporateList={corporateList} />
            </Route>
          </Switch>
          <Pagination corporateList={corporateList} />
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
