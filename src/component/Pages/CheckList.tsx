import React, { useEffect, useState } from "react";
import ChecklistTable from "./ChecklistTable";
import ChecklistTabletw from "./ChecklistTabletw";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginationChecklist from "../pagination/paginationChecklist";
import { connect, useDispatch } from "react-redux";
import { checklistAction } from "../redux/action/checklistAction";
import { RootState } from "../redux/rootReducers/rootReducers";

interface custonPros {
  checklist?: any;
}

function CheckList({ checklist }: custonPros) {
  const [checklisteData, setChecklistData] = useState([]);
  const dispatch = useDispatch();

;

  useEffect(() => {
    if (checklist && checklist.checklist.length) {
      setChecklistData(checklist.checklist)
    }
  }, [checklist]);


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/checklist">
            <ChecklistTable checklisteData={checklisteData} />
          </Route>
        </Switch>
        <PaginationChecklist />
      </Router>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    checklist: state.checklist,
  };
};

export default connect(mapStateToProps, null)(CheckList);
