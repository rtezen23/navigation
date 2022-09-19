import React from 'react';
import { useState } from 'react';
import './buzon.css';
import Select from 'react-select';

const Buzon = () => {
	const [tipo, setTipo] = useState('Sugerencia');

	const handleTipo = value => {
		setTipo(value);
	};

	const options = [
		{ value: 'queja', label: 'queja' },
		{ value: 'sugerencia', label: 'sugerencia' },
	];

	return (
		<section className='buzon-container'>
			<form className='buzon-form'>
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
				<div className='buzon-labels'>
					<label htmlFor='tipo'>Tipo </label>
					<label htmlFor='nombre'>Nombre Completo </label>
					<label htmlFor='dni'>DNI </label>
					<label htmlFor='cargo'>Cargo </label>
					<label htmlFor='descripcion'>Descripción de {tipo}</label>
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
					<Select value={tipo} onChange={handleTipo} options={options} />

					<input type='text' name='nombre' id='nombre' />
					<input type='text' name='dni' id='dni' />
					<input type='text' name='cargo' id='cargo' />
					<textarea
						name='descripcion'
						id='descripcion'
						className='buzon-textarea'
					></textarea>
				</div>
			</form>
		</section>
	);
};

export default Buzon;
