import Pagination from "../pagination/pagination";
import CorporateTable from "./CorporateTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducers/rootReducers";
import { getcorporateData } from "../redux/action/corporateAction";
import { useEffect, useState } from "react";
import AddCorporate from "./AddCorporate";

function Corporate(corporatestat: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcorporateData(0));
  }, []);

  const corporateList = corporatestat.corporatestat.corporate;

  const [create, setCreate] = useState(true);

  const createcorporate = () => {
    setCreate(false);
  };

  return (
    <div className="Corporate text-center">
      <div>
        <Router>
          <Switch>
            <Route exact path="/corporate">
              {create ? (
                <div>
                  <button
                    style={{ float: "right" }}
                    onClick={createcorporate}
                    className="btn btn-warning"
                  >
                    CREATE NEW CORPORATE
                  </button>
                  <CorporateTable corporateList={corporateList} />
                </div>
              ) : (
                <AddCorporate />
              )}
            </Route>
          </Switch>
          {create && <Pagination corporateList={corporateList} />}
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
