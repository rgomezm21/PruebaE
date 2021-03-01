import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialTable from 'material-table';
import { Modal, TextField, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from 'reactstrap';

const columnas = [
	{
		title: '#Id',
		field: 'id',
	},
	{
		title: 'Nombre',
		field: 'name',
	},
	{
		title: 'Usuario',
		field: 'username',
	},
	{
		title: 'telefono',
		field: 'phone',
	},
];

const url = 'https://jsonplaceholder.typicode.com/users';

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	iconos: {
		cursor: 'pointer',
	},
	inputMaterial: {
		width: '100%',
	},
}));

function Base() {
	const styles = useStyles();
	const [isOpenWarning, setIsOpenWarning] = useState(false);
	const [isOpenSuccess, setIsOpenSuccess] = useState(false);
	const [data, setData] = useState([]);
	const [moEditar, setMoEditar] = useState(false);
	const [datosEmpleado, setDatosEmpleado] = useState({
		name: '',
		username: '',
		email: '',
		phone: '',
		company: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDatosEmpleado((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const Get = async () => {
		await axios.get(url).then((response) => {
			setData(response.data);
		});
	};

	const peticionPut = async () => {
		await axios
			.put(url + '/' + datosEmpleado.id, datosEmpleado)
			.then((response) => {
				let dataNueva = data;
				dataNueva.map((name) => {
					if (name.id === datosEmpleado.id) {
						name.name = datosEmpleado.name;
						name.username = datosEmpleado.username;
						name.email = datosEmpleado.email;
						name.phone = datosEmpleado.phone;
						name.company = datosEmpleado.company;
					}
					setIsOpenSuccess(true);

					setTimeout(() => {
						setIsOpenSuccess(false);
					}, 1000);
				});
				setData(dataNueva);
				abrirCerrarMoEditar();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const usuarioSeleccionado = (name, caso) => {
		setDatosEmpleado(name);
		caso === 'Editar' && abrirCerrarMoEditar();
		setIsOpenWarning(true);

		setTimeout(() => {
			setIsOpenWarning(false);
		}, 1000);
	};

	const abrirCerrarMoEditar = () => {
		setMoEditar(!moEditar);
	};

	useEffect(() => {
		Get();
	}, []);

	const bodyEditar = (
		<div className={styles.modal}>
			<h3>Editar Usuario</h3>
			<TextField
				className={styles.inputMaterial}
				label="Nombre"
				name="name"
				onChange={handleChange}
				value={datosEmpleado && datosEmpleado.name}
			/>
			<br />
			<TextField
				className={styles.inputMaterial}
				label="Usuario"
				name="username"
				onChange={handleChange}
				value={datosEmpleado && datosEmpleado.username}
			/>
			<br />
			<TextField
				disabled
				className={styles.inputMaterial}
				label="Email"
				name="email"
				onChange={handleChange}
				value={datosEmpleado && datosEmpleado.email}
			/>
			<br />
			<TextField
				className={styles.inputMaterial}
				label="Telefono"
				name="phone"
				onChange={handleChange}
				value={datosEmpleado && datosEmpleado.phone}
			/>
			<br />
			<TextField
				disabled
				className={styles.inputMaterial}
				label="Compañia"
				name="company"
				onChange={handleChange}
				value={datosEmpleado && datosEmpleado.company.name}
			/>
			<br />
			<br />
			<div align="right">
				<Button color="primary" onClick={peticionPut}>
					Guardar
				</Button>
				<Button onClick={() => abrirCerrarMoEditar()}>Cerrar</Button>
			</div>
		</div>
	);

	return (
		<Container>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isOpenWarning}
				autoHideDuration={6000}>
				<Alert color="warning">
					<strong>Warning:</strong> Ventana para cambiar datos
				</Alert>
			</Snackbar>

			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isOpenSuccess}
				autoHideDuration={2000}>
				<Alert color="success"><strong>Warning:</strong> Guardado exitosamente</Alert>
			</Snackbar>

			<div
				className="table-responsive"
				style={{
					width: '900px',
					margin: '60px auto',
					border: '2px solid black',
					borderRadius: '20px',
				}}>
				<MaterialTable
					columns={columnas}
					data={data}
					title="Usuarios"
					actions={[
						{
							icon: 'edit',
							tooltip: 'Editar usuario',
							onClick: (event, rowData) =>
								usuarioSeleccionado(rowData, 'Editar'),
						},
					]}
					options={{
						actionsColumnIndex: -1,
					}}
					localization={{
						header: {
							actions: 'Opciones',
						},
					}}
				/>
				<Modal open={moEditar} onClose={abrirCerrarMoEditar}>
					{bodyEditar}
				</Modal>
			</div>
		</Container>
	);
}

export default Base;
