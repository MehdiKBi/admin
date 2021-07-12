import React from "react";




interface customProps {
  corporateDatatw: any,
}

function CorporateTable({ corporateDatatw }: customProps) {

  
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
            {corporateDatatw.map((y: any) => (
              <tr
              key={y.name}
              >
                <td>{y.name}</td>
                <td key={y.dodomainmain}>{y.domain}</td>
                <td key={y.mailRestrictions}>{y.mailRestrictions}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
  
}
export default CorporateTable