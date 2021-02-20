import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialTable from 'material-table';
// import {Modal, TextField, Button} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

const columnas = [
  {
    title: '#Id',
    field: 'id'
  },
  {
    title: 'Nombre',
    field: 'name'
  },
  {
    title: 'Usuario',
    field: 'username'
  },
  {
    title: 'telefono',
    field: 'phone'
  },
]

const url = "https://jsonplaceholder.typicode.com/users";
function App() {

  const [data, setData]=useState([]);

  const Get=async()=>{
    await axios.get(url).then(response=>{
      setData(response.data);
    })
  }
  useEffect(()=>{
   Get();
  },[])
  return (
    <div className="table-responsive" style={{width:'900px', margin:'60px auto', border:'2px solid black', borderRadius:'20px'}}>
      <MaterialTable
      columns={columnas}
      data={data}
      title="Usuarios"
      actions={[
        {
          icon: 'edit',
          tooltip: 'Editar usuario',
          onClick: (event, rowData)=>alert('Prueba donde deberia ir un modal con los datos de: '+rowData.name)
        }
      ]}
      options={{
        actionsColumnIndex: -1 
      }}
      localization={{
        header:{
          actions:'Opciones'
        }
      }}
      />
    </div>
  );
} 

export default App;



