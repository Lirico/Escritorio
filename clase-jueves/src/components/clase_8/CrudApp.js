import { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import axios from "axios";

const initialDb = [];

const CrudApp = () => {
  const [db, setDB] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const readState = async () => { // GET
    const response = await axios.get('http://localhost:5000/santos');

    const newDb = response.data

    setDB(newDb)
  }; 

  useEffect(() => {
    readState()
  }, [])
  
 
  const createRecord = async(data) => { // POST // No tiene ID
    data.id = Date.now()

    await axios.post('http://localhost:5000/santos', JSON.stringify(data))

    readState()
  };

  const updateRecord = async (data) => {
    await axios.put(`http://localhost:5000/santos/${data.id}`, JSON.stringify(data))

    readState()
  };

  const deleteRecord = async (data) => {
    const {name, constellation, id} = data;

    const confirmar = confirm(`¿Estás seguro de que queres eliminar a ${name} de ${constellation}?`)

    if (confirmar) {
      await axios.delete(`http://localhost:5000/santos/${id}`)
    } else {
      return
    }

    readState()
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createRecord={createRecord}
        updateRecord={updateRecord}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        db={db}
        deleteRecord={deleteRecord}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;
