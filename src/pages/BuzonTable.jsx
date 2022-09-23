import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import './styles/buzonTable.css';
import {FaSearch} from 'react-icons/fa';

export const BuzonTable = () => {

    const [datosBuzon, setDatosBuzon] = useState([])
    const [inputText, setInputText] = useState([])
    const [suggestions, setSuggestions] = useState([])

    const columns = [
        {
            name: 'IDBUZON',
            selector: row => row.idbuzon,
            grow: .5,
            center: true
        },
        {
            name: 'FECHA_RECEPCION',
            selector: row => row.fecha_recepcion,
            grow: 1.5,
            center: true
        },
        {
            name: 'TIPO',
            selector: row => row.tipo,
        },
        {
            name: 'NOMBRE',
            selector: row => row.nombre,
        },
        {
            name: 'DNI',
            selector: row => row.dni,
            
        },
        {
            name: 'CARGO',
            selector: row => row.cargo,
            
        },
        {
            name: 'DESCRIPCION',
            selector: row => row.descripcion,
            
        },
    ];

    const handleOnExport = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(datosBuzon);

        XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

        XLSX.writeFile(wb, 'BuzonData.xlsx')
    }

    const URL = 'http://192.168.1.51:4000/api/v1/buzon';

    const showData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		const newBuzons = data.buzons.map(buzon => {
			const newDate = new Date (buzon.fecha_recepcion)
			return {...buzon, fecha_recepcion: newDate.toLocaleString()}
		})
		setDatosBuzon(newBuzons);
        setSuggestions(newBuzons)
	};

    useEffect(() => {
        showData()
    }, [])

    const handleSearch = (value) => {
        let matches = [];
		if (value.length > 0) {
			matches = datosBuzon.filter(datoBuzon => {
				const regex = new RegExp(`${value}`, 'gi');
				const values = Object.values(datoBuzon);
				for (let i = 0; i < values.length; i++) {
					if (values[i].toString().match(regex)) {
						return values[i].toString().match(regex);
					}
				}
			});
			setSuggestions(matches);
		} else setSuggestions(datosBuzon);
		setInputText(value);
    }

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
      };

      

  return (
    <div>
        <div className='buzonTable-alineados'>
            <div className='search-container'>
                <input className='buzonTable-input' type='text' value={inputText} onChange={e=>handleSearch(e.target.value)} placeholder="Ingrese texto a buscar" />
                <FaSearch className='input-search'/>
            </div>
            <button className='buzonTable-button' onClick={handleOnExport}>Exportar</button>
        </div>

        <DataTable
					// responsive
					columns={columns}
					// data={datosBuzon}
					data={suggestions}
					pagination
					paginationComponentOptions={paginationOptions}
					fixedHeader
					fixedHeaderScrollHeight='600px'
					title="Registros Buzon:"
		/>
    </div>
  )
}
