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
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry", value: "strawberry", disabled: true },
    { label: "Watermelon", value: "watermelon" },
    { label: "Pear", value: "pear" },
    { label: "Apple", value: "apple" },
    { label: "Tangerine", value: "tangerine" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Peach", value: "peach" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h6>Hobbies</h6>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  );
};

export default SelectMult;