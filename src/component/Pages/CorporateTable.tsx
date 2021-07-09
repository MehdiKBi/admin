import React from "react";
import {motion} from "framer-motion"


interface customProps {
  corporateData:any
}

function CorporateTable({corporateData}:customProps) {
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
              <motion.tr
                animate={{opacity:[0.40,1]}}
              >
                <td key={y.name}>{y.name}</td>
                <td key={y.dodomainmain}>{y.domain}</td>
                <td key={y.mailRestrictions}>{y.mailRestrictions}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
    </div>
  )
  
}
export default CorporateTable