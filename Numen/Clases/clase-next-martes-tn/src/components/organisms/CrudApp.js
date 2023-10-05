import { useState, useEffect } from "react";
import axios from "axios";
import CrudForm from "../molecules/crud_molecules/CrudForm";
import CrudTable from "../molecules/crud_molecules/CrudTable";

const initialDb = [];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const getData = async () => {
    const ENDPOINT = "http://localhost:5000/santos";
    const response = await axios.get(ENDPOINT);
    const santos = await response.data;

    setDb(santos)
  } 

  useEffect(() => {
    getData()
  }, [])
  

  const createData = async (data) => {

    data.id = Date.now()

    const options = {
        method: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify(data)
    }

    await axios("http://localhost:5000/santos", options)

    getData()

    
  };

  const updateData = async (data) => {

    const {id} = data;

    const options = {
        method: "PUT",
        headers: {"content-type": "application/json"},
        data: JSON.stringify(data)
    }

    await axios(`http://localhost:5000/santos/${id}`, options)

    getData()
  };

  const deleteData = async (caballero) => {

    const {name, constellation, id} = caballero;

    let isDelete = window.confirm(`Estas seguro de que queres eliminar a ${name} de la constelacion ${constellation}`)

    if(isDelete) {
        const options = {
            method: "DELETE",
            headers: {"content-type": "application/json"},
        }
    
        await axios(`http://localhost:5000/santos/${id}`, options)
    
        getData()
    } else {
        return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <br />

      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;
