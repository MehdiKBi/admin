import React from "react";

interface customProps {
  checklisteData?: any;
}

function ChecklistTable({ checklisteData }: customProps) {
  console.log(checklisteData);

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">partner</th>
              <th scope="col">offer</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            {checklisteData.map((y: any) => (
              <tr key={y._id}>
                <td>{y.partner}</td>
                <td>{y.offer}</td>
                <td>{y.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChecklistTable;
