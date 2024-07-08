import "./Catalog.css";
import Input from "../nav/Input";

function Catalog({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Каталог</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Все
        </label>
        <Input
          handleChange={handleChange}
          value="tranzistors"
          title="Транзисторы"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="antenns"
          title="Антенны"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="rezistors"
          title="Резисторы"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="condensators"
          title="Конденсаторы"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="diods"
          title="Диоды"
          name="test"
        />
      </div>
    </div>
  );
}

export default Catalog;
