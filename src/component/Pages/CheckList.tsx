import React, { useEffect, useState } from "react";
import ChecklistTable from "./ChecklistTable";
import ChecklistTabletw from "./ChecklistTabletw";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginationChecklist from "../pagination/paginationChecklist";

function CheckList() {
  const [checklisteData, setChecklistData] = useState([]);
  const [checklisteDatatw, setChecklistDatatw] = useState([]);

  useEffect(() => {
    fetch(
      "https://api-dev.corplife.at/v0/corplife/checklists?skip=0&sortBy=name&limit=16"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setChecklistData(data.data.slice(0, 8));
        setChecklistDatatw(data.data.slice(9, 18));        
      });
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

export default CheckList;
