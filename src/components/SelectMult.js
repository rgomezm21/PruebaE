import React, { Component, Fragment, useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { value: "oficio", label: "oficio" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" },
  { value: "blanco", label: "blanco" }
];


const SelectMult = ({prueba}) => {
  const [selectedOption, setselectedOption] = useState([])

  const handleChange = selectedOption => {
    setselectedOption({selectedOption})
    // this.setState({ selectedOption });
    // Option selected: { value: "rojo", label: "rojo" }
    // console.log("Option selected:", selectedOption);
  };

  useEffect(() => {
    prueba(selectedOption)
  }, [selectedOption])

  return (
    <Fragment>
         <h6>Hobbies</h6>
      <Select
        isMulti
        name="hobbie"
        options={options}
        value={selectedOption}
        onChange={handleChange}
        closeMenuOnSelect={false}
      />
    </Fragment>
  );
}

export default SelectMult