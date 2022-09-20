import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

export const BuzonTable = () => {

    const [datosBuzon, setDatosBuzon] = useState([])

    const columns = [
        {
            name: 'IDBUZON',
            selector: row => row.idbuzon,
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
        {
            name: 'FECHA_RECEPCION',
            selector: row => row.fecha_recepcion,
            grow: 1.5,
        },
    ];

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

    console.log(datosBuzon)

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
      };

      

  return (
    <div>
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
