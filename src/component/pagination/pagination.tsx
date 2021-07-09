import React from "react";
import { Link } from "react-router-dom";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

function Pagination() {
  return (
    <div className="mt-5 text-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link text-dark" to="/corporate">
              <BsFillCaretLeftFill />
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link text-dark" to="/page2">
              <BsFillCaretRightFill />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
