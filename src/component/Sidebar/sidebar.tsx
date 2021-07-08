import "./sidebar.css";
import {
  AiFillSetting,
  AiOutlineUnorderedList,
  AiFillBank,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar-box">
      <div
        className="flex-shrink-0 p-3 bg-warning text-secondary"
        style={{ width: "10em", height: "100vh" }}
      >
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed text-white"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              <Link className="router-link" to="/corporate">
                <AiFillBank />
                <h6>Corporate</h6>
              </Link>
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle text-white align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <Link className="router-link" to="/checklist">
                {" "}
                <AiOutlineUnorderedList />
                <h6>Checklist</h6>
              </Link>
            </button>
            <div className="collapse" id="dashboard-collapse"></div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle text-white align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              <Link className="router-link" to="/settings">
                {" "}
                <AiFillSetting />
                <h6>Settings</h6>
              </Link>
            </button>
            <div className="collapse" id="orders-collapse"></div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1"></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
