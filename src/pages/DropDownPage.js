import DropDown from "../DropDown";
import HuradTrophies from "../Trophies/HuradTrophies";
import NozhanTrophies from "../Trophies/NozhanTrophies";
import SepantaTrophies from "../Trophies/SepantaTrophies";
import AminTrophies from "../Trophies/AminTrophies";
import "../index.css";

import { useState } from "react";

const DropDownPage = () => {
  const [selection, setSelection] = useState("");
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Shariat FC", value: "hurad", trophies: <HuradTrophies /> },
    {
      label: "SL Mahfrooz Mahalleh",
      value: "nozhan",
      trophies: <NozhanTrophies />,
    },
    { label: "Joshan United", value: "sepanta", trophies: <SepantaTrophies /> },
    { label: "Athletico kizilic", value: "amin", trophies: <AminTrophies /> },
  ];
  return (
    <div>
      <DropDown options={options} value={selection} onChange={handleSelect} />
      {selection.trophies}
    </div>
  );
};

export default DropDownPage;
