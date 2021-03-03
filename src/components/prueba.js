 {/* <TableContainer style={{width:'500px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Telefono</TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(usuarios=>(
              <TableRow key={usuarios.id}>
                <TableCell>{usuarios.id}</TableCell>
                <TableCell>{usuarios.name}</TableCell>
                <TableCell>{usuarios.username}</TableCell>
                <TableCell>{usuarios.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      // import React, {useEffect, useState} from 'react';
// import './App.css';
// import axios from 'axios'
// // import {Modal, Button, TextField} from '@material-ui/core';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Editar from './components/Editar';

// const url = "https://jsonplaceholder.typicode.com/users?limit=4";
// function App() {

//   const [data, setData]=useState([]);

//   const Get=async()=>{
//     await axios.get(url).then(response=>{
//       setData(response.data);
//     })
//   }
//   useEffect(async()=>{
//     await Get();
//   },[])
//   return (
//     <div className="App">
//        <table className="table" style={{width:'800px', margin:'250px auto', border:'2px solid black', borderRadius:'50px'}}>
//                 <thead className="table-dark">
//                     <tr>
//                     <th scope="col">#id</th>
//                     <th scope="col">Nombre</th>
//                     <th scope="col">Usuario</th>
//                     <th scope="col">Telefono</th>
//                     <th scope="col">Opciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map(usuarios=>(
//                     <tr key={usuarios.id}>
//                     <th scope="row">{usuarios.id}</th>
//                     <td>{usuarios.name}</td>
//                     <td>{usuarios.username}</td>
//                     <td>{usuarios.phone}</td>
//                     <td><Editar/></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//     </div>
//   );
// } 

// export default App;





// import React, { useState } from "react";
// import MultiSelect from "react-multi-select-component";

// const SelectMult = () => {
//   const options = [
//     { label: "Bailar", value: "bailar" },
//     { label: "Comer", value: "comer", disabled: true },
//     { label: "Leer", value: "leer" },
//     { label: "Estudiar", value: "estudiar" },
//     { label: "Pescar", value: "pescar" },
//     { label: "Correr", value: "correr" },
//     { label: "Viajar", value: "viajar" },
//   ];

//   const [selected, setSelected] = useState([]);

//   return (
//     <div>
//       <h6>Hobbies</h6>
//       {/* <pre>{JSON.stringify(selected)}</pre> */}
//       <MultiSelect
//         name="hobbie"
//         options={options}
//         value={selected}
//         onChange={setSelected}
//         labelledBy={"Select"}
//       />
//     </div>
//   );
// };

// export default SelectMult;

// import React, { Component, Fragment, useState, useEffect } from "react";
// import Select from "react-select";

// const options = [
//   { value: "oficio", label: "oficio" },
//   { value: "azul", label: "azul" },
//   { value: "verde", label: "verde" },
//   { value: "blanco", label: "blanco" }
// ];


// const SelectMult = ({prueba}) => {
//   const [selectedOption, setselectedOption] = useState([])

//   const handleChange = selectedOption => {
//     setselectedOption({selectedOption})
//     // this.setState({ selectedOption });
//     // Option selected: { value: "rojo", label: "rojo" }
//     // console.log("Option selected:", selectedOption);
//   };

//   useEffect(() => {
//     prueba(selectedOption)
//   }, [selectedOption])

//   return (
//     <Fragment>
//          <h6>Hobbies</h6>
//       <Select
//         isMulti
//         name="hobbie"
//         options={options}
//         value={selectedOption}
//         onChange={handleChange}
//         closeMenuOnSelect={false}
//       />
//     </Fragment>
//   );
// }

// export default SelectMult