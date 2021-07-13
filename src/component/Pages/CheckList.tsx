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
  const [checklisteDatatw, setChecklistDatatw] = useState([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch(
  //     "https://api-dev.corplife.at/v0/corplife/checklists?skip=0&sortBy=name&limit=16"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data.data);
  //       setChecklistData(data.data.slice(0, 8));
  //       setChecklistDatatw(data.data.slice(9, 18));
  //     });
  // }, []);

  useEffect(() => {
    dispatch(checklistAction());
    const pageOne = checklist.checklist.slice(0, 7)
    const pageTwo = checklist.checklist.slice(8, 16)
    setChecklistData(pageOne)
    setChecklistDatatw(pageTwo)
    console.log( "checklist" ,checklist.checklist.slice(0,2));
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/checklist">
            <ChecklistTable checklisteData={checklisteData} />
          </Route>
          <Route path="/p2">
            <ChecklistTabletw checklisteDatatw={checklisteDatatw} />
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
