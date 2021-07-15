import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCorporateAction } from "../redux/action/corporateAction";
import { RootState } from "../redux/rootReducers/rootReducers";

interface customProps {
  corporateList: any;
}

function CorporateTable({ corporateList }: customProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(deleteCorporateAction(1));
    console.log();
  }, []);

  const idFinder = () => {
    corporateList.forEach((element: any) => {
      const idOfTheCorporate = element._id;
      console.log(idOfTheCorporate);
      return idOfTheCorporate;
    });
  };

  console.log("now" , corporateList);
  
  const deletCorporate = (id: any) => {
    const filterdID = corporateList.filter((item: any) => item._id !== id);
    console.log(filterdID);
    return filterdID;
    // dispatch(deleteCorporateAction(""));
    // idFinder()
    // console.log(corporateList[0]._id);
    // console.log("deleted");
  };

  return (
    <div>
      <table className="table">
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
              <button onClick={() => deletCorporate(y._id)} className="btn">
                DELETE
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const MapStateToProps = (state: RootState) => {
  return {
    corporate: state.corporate,
  };
};
export default CorporateTable;
