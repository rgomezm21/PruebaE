// import React, { Component, Fragment } from "react";
// import Select from "react-select";

// const options = [
//   { value: "oficio", label: "oficio" },
//   { value: "azul", label: "azul" },
//   { value: "verde", label: "verde" },
//   { value: "blanco", label: "blanco" }
// ];

// export default class SelectMult extends Component {
//   state = {
//     selectedOption: null
//   };
//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     // Option selected: { value: "rojo", label: "rojo" }
//     console.log("Option selected:", selectedOption);
//   };
//   render() {
//     return (
//       <Fragment>
//         <Select
//           isMulti
// 				  name="hobbie"
//           options={options}
//           value={this.state.selectedOption}
//           onChange={this.handleChange}
//           closeMenuOnSelect={false}
//         />
//       </Fragment>
//     );
//   }
// }

import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const SelectMult = () => {
  const options = [
    { label: "Bailar", value: "bailar" },
    { label: "Leer", value: "leer" },
    { label: "Comer", value: "comer", disabled: true },
    { label: "Estudiar", value: "estudiar" },
    { label: "Pescar", value: "pescar" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h6>Hobbies</h6>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        name="hobbie"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  );
};

export default SelectMult;