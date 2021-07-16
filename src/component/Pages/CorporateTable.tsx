import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducers/rootReducers";
import {deleteCorporateAction} from "../redux/action/corporateAction"

interface customProps {
  corporateList: any;
}

function CorporateTable({ corporateList }: customProps) {
  const dispatch = useDispatch();

  console.log("full lost to be modified", corporateList);




  const deletCorporate = (id: any) => {
    dispatch(deleteCorporateAction(id))
  };

  const editCorporate = (id:any) => {
    console.log(id);
  };

  return (
    <div>
     {corporateList&& <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Domain</th>
            <th scope="col">Mail restrictions</th>
          </tr>
        </thead>
        <tbody>
          {corporateList.map((y: any) => (
            <tr key={y._id}>
              <td>{y.name}</td>
              <td>{y.domain}</td>
              <td>{y.mailRestrictions}</td>
              <td>{y._id}</td>
              <button onClick={() => deletCorporate(y._id)}>
                DELETE
              </button>
              <button onClick={() => editCorporate(y._id)}>
                EDIT
              </button>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

export const MapStateToProps = (state: RootState) => {
  return {
    corporate: state.corporate,
  };
};

export default connect(MapStateToProps, null)(CorporateTable);
