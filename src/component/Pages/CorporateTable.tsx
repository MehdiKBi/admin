import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCorporateAction } from "../redux/action/corporateAction";
import { RootState } from "../redux/rootReducers/rootReducers";

interface customProps {
  corporateList: any;
}

function CorporateTable({ corporateList }: customProps) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(deleteCorporateAction(corporateList));
  // }, []);


  console.log("full", corporateList);


  const deletCorporate = (id:any) => {
    const filterdID = corporateList.filter((item: any) => item._id !== id
    );
    // dispatch(deleteCorporateAction(filterdID))
    return filterdID;
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
export default CorporateTable;
