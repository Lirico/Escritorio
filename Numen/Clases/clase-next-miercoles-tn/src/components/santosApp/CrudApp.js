import { useState, useEffect } from "react";
import axios from "axios";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null)

  const getData = async () => {
    const ENDPOINT = "http://localhost:5000/santos";
    const response = await axios.get(ENDPOINT),
      json = await response.data;

      setDb(json)
  }

  useEffect(() => {
    getData()
  }, [])
  

  const createData = async (data) => {
    data.id = Date.now()

    const ENDPOINT = "http://localhost:5000/santos";

    const OPTIONS = {
      method: "POST",
      headers: {"content-type": "application/json"},
      data: JSON.stringify(data)
    }

    await axios(ENDPOINT, OPTIONS)

    getData()
  }

  const updateData = async (data) => {

    // Destructurando la data
    const {id} = data;

    const ENDPOINT = `http://localhost:5000/santos/${id}`;

    const OPTIONS = {
      method: "PUT",
      headers: {"content-type": "application/json"},
      data: JSON.stringify(data)
    }

    await axios(ENDPOINT, OPTIONS)

    getData()
  }

  const deleteData = async (data) => {
    // Destructurando la data
    const {name, constellation, id} = data;

    let isDelete = window.confirm(`Estas seguro de que queres eliminar a ${name} de ${constellation}?`)

    if (isDelete) {
      const ENDPOINT = `http://localhost:5000/santos/${id}`;

      const OPTIONS = {
        method: "DELETE",
        headers: {"content-type": "application/json"}
      }

      await axios(ENDPOINT, OPTIONS)

      getData()
    } else {
      return
    }
  }

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm 
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable data={db} 
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;
