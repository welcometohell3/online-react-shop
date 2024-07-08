import Catalog from "../products/Catalog";
import "../../../styles/Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Catalog handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
