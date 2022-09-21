import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import './buzonTable.css';

export const BuzonTable = () => {

    const [datosBuzon, setDatosBuzon] = useState([])

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
	};

    useEffect(() => {
        showData()
    }, [])

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
      };

      

  return (
    <div>
        <button className='buzonTable-button' onClick={handleOnExport}>Exportar</button>
        <DataTable
					// responsive
					columns={columns}
					data={datosBuzon}
					pagination
					paginationComponentOptions={paginationOptions}
					fixedHeader
					fixedHeaderScrollHeight='600px'
					title="Registros Buzon:"
		/>
    </div>
  )
}
