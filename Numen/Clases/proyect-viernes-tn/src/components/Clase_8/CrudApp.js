import React, { useState, useEffect } from "react";
import axios from "axios";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const readDb = async () => {
    const ENDPOINT = "http://localhost:5000/santos";
    const response = await axios.get(ENDPOINT);
    const db = await response.data;

    setDb(db)
  }

  useEffect(() => {
    readDb()
  }, [])
  

  const createData = async (data) => {
    data.id = Date.now()

    const ENDPOINT = "http://localhost:5000/santos";
    
    const OPTIONS = {
        method: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify(data)
    }
    
    await axios(ENDPOINT, OPTIONS);

    readDb()
  };

  const updateData = async (data) => {

    const {id} = data;

    const ENDPOINT = `http://localhost:5000/santos/${id}`;
    
    const OPTIONS = {
        method: "PUT",
        headers: {"content-type": "application/json"},
        data: JSON.stringify(data)
    }
    
    await axios(ENDPOINT, OPTIONS);

    readDb()
  };

  const deleteData = async (data) => {
    const {id, name, constellation} = data;

    const confirmar = confirm(`Estas seguro de que queres elimiar a ${name} de ${constellation}?`)

    if (!confirmar) {
        return
    } else {
        const ENDPOINT = `http://localhost:5000/santos/${id}`;
    
        const OPTIONS = {
            method: "DELETE",
            headers: {"content-type": "application/json"},
        }
        
        await axios(ENDPOINT, OPTIONS);
    
        readDb()
    }
  };

  return (
    <>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </>
  );
};

export default CrudApp;
