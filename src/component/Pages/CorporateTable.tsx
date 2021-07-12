import React from "react";

interface customProps {
  corporateData: any;
}

function CorporateTable({ corporateData }: customProps) {
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
          {corporateData.map((y: any) => (
            <tr>
              <td key={y.name}>{y.name}</td>
              <td key={y.dodomainmain}>{y.domain}</td>
              <td key={y.mailRestrictions}>{y.mailRestrictions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CorporateTable;
