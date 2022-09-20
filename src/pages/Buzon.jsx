import React from 'react';
import { useState } from 'react';
import './buzon.css';
import Select from 'react-select';
import axios from 'axios';
import { Message } from '../components/Message';
import {useNavigate} from 'react-router-dom';

const Buzon = () => {
	const [tipo, setTipo] = useState('');
	const [ showMessage, setShowMessage ] = useState(false);

	const navigate = useNavigate();

	const [buzonDatos, setBuzonDatos] = useState({
		tipo: '',
		nombre: '',
		dni: '',
		cargo: '',
		descripcion: '',
	})

	const handleTipo = data => {
		setTipo(data.value);
		setBuzonDatos(prevBuzonDatos => {
            return {
                ...prevBuzonDatos,
                tipo: data.value
            }
        })
	};

	const handleCargo = data => {
		setBuzonDatos(prevBuzonDatos => {
            return {
                ...prevBuzonDatos,
                cargo: data.value
            }
        })
	};

	const handleChange = (event) => {
        setBuzonDatos(prevBuzonDatos => {
            return {
                ...prevBuzonDatos,
                [event.target.name]: event.target.value
            }
        })
    }

	// const calcularFecha = () => {
	// 	const fecha = new Date();
	// 	const year = fecha.getFullYear();
	// 	const month = fecha.getMonth();
	// 	const day = fecha.getDate();
	// 	const fechaFinal = `${day}-${month+1}-${year}`;
	// 	return fechaFinal;
	// }

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://192.168.1.51:4000/api/v1/buzon', buzonDatos)
		.then(res => {
			setShowMessage(true);
			console.log(res.data);
		})
		.catch(error => console.log(error));
	}

	const handleBuzonData = () => {
		const respuesta = prompt('Ingrese contraseña');
		if (respuesta) {
			localStorage.setItem('password', respuesta)
			if (respuesta === '123') {
				navigate('/buzonData')
			} else alert('Contraseña incorrecta')
			navigate
		} else {
			alert('Contraseña inválida')
		}
	}

	const optionsTipo = [
		{ value: 'queja', label: 'Queja' },
		{ value: 'sugerencia', label: 'Sugerencia' },
	];

	const optionsCargo = [
		{ value: 'ABOGADO', label: 'ABOGADO'},
		{ value: 'ADMINISTRADOR BASE DATOS', label: 'ADMINISTRADOR BASE DATOS'},
		{ value: 'ANALISTA DE BASE DE DATOS', label: 'ANALISTA DE BASE DE DATOS'},
		{ value: 'ANALISTA DE OPERACIONES', label: 'ANALISTA DE OPERACIONES'},
		{ value: 'ANALISTA DE SISTEMAS', label: 'ANALISTA DE SISTEMAS'},
		{ value: 'ASESOR DOMICILIARIO', label: 'ASESOR DOMICILIARIO'},
		{ value: 'ASESOR TELEFÓNICO', label: 'ASESOR TELEFÓNICO'},
		{ value: 'ASISTENTE ADMINISTRATIVO/A', label: 'ASISTENTE ADMINISTRATIVO/A'},
		{ value: 'ASISTENTE CONTABLE', label: 'ASISTENTE CONTABLE'},
		{ value: 'CONTADOR', label: 'CONTADOR'},
		{ value: 'JEFE DE CUENTA', label: 'JEFE DE CUENTA'},
		{ value: 'JEFE OPERACIONES', label: 'JEFE OPERACIONES'},
		{ value: 'MONITOR DE CALIDAD', label: 'MONITOR DE CALIDAD'},
		{ value: 'SOPORTE TÉCNICO', label: 'SOPORTE TÉCNICO'},
		{ value: 'SUPERVISOR DE COBRANZAS', label: 'SUPERVISOR DE COBRANZAS'},
		{ value: 'OTRO', label: 'OTRO'},
	];

	return (
		<section className='buzon-container'>
			{ showMessage && <Message handleMessage={()=>setShowMessage(false)}/> }
			<form className='buzon-form' onSubmit={handleSubmit}>
				{/* <div>
                <label htmlFor="tipo">Tipo: </label>
                <select name="tipo" id="tipo">
                    <option value="queja">Queja</option>
                    <option value="sugerencia">Sugerencia</option>
                </select>
            </div>
            <div>
                <label htmlFor="nombre">Nombre Completo: </label>
                <input type="text" name="nombre" id="nombre" />
            </div>
            <div>
                <label htmlFor="dni">DNI: </label>
                <input type="text" name="dni" id="dni" />
            </div>
            <div>
                <label htmlFor="cargo">Cargo: </label>
                <input type="text" name="cargo" id="cargo" />
            </div>
            <div>
                <label htmlFor="descripcion">Descripción de {}</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
            </div> */}
			<h5 onClick={handleBuzonData} className='watch-registers'>Ver registros</h5>
			<div className="buzon-input_label_container">
				<div className='buzon-labels'>
					<label htmlFor='tipo'>Tipo </label>
					<label htmlFor='nombre'>Nombre Completo </label>
					<label htmlFor='dni'>DNI </label>
					<label htmlFor='cargo'>Cargo </label>
					<label htmlFor='descripcion'>Descripción {tipo}</label>
				</div>
				<div className='buzon-inputs'>
					{/* <select
						name='tipo'
						id='tipo'
						onChange={e => handleTipo(e.target.value)}
					>
						<option value='Sugerencia'>Seleccione</option>
						<option value='Queja'>Queja</option>
						<option value='Sugerencia'>Sugerencia</option>
					</select> */}
					<Select onChange={handleTipo} options={optionsTipo} />

					<input required type='text' name='nombre' id='nombre' onChange={handleChange}/>
					<input required type='text' name='dni' id='dni' onChange={handleChange}/>
					<Select onChange={handleCargo} options={optionsCargo} />
					<textarea
						name='descripcion'
						id='descripcion'
						className='buzon-textarea'
						onChange={handleChange}
					></textarea>
				</div>
			</div>
				<button className='buzon-button'>Enviar</button>
			</form>
		</section>
	);
};

export default Buzon;
