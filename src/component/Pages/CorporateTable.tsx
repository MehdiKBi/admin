import React from "react";

interface customProps {
  corporateList: any;
}

function CorporateTable({ corporateList }: customProps) {

  
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CorporateTable;
