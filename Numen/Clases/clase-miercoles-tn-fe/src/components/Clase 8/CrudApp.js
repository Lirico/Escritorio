import { useState, useEffect } from "react";
import axios from "axios";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const readDB = async () => {
    const ENDPOINT = "http://localhost:8000/santos";
    const response = await axios.get(ENDPOINT);
    const db = await response.data;

    setDb(db)
  }

  useEffect(() => {
    readDB()
  }, [])
  

  const createData = async (data) => {
    data.id = Date.now()

    const ENDPOINT = "http://localhost:8000/santos";

    const OPTIONS = {
        method: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify(data)
    }

    await axios(ENDPOINT, OPTIONS);

    readDB()
  };

  const updateData = async (data) => {

    const ENDPOINT = `http://localhost:8000/santos/${data.id}`;

    const OPTIONS = {
        method: "PUT",
        headers: {"content-type": "application/json"},
        data: JSON.stringify(data)
    }

    await axios(ENDPOINT, OPTIONS);

    readDB()
  };

  const deleteData = async (data) => {

    // Destructurar la data
    const {name, constellation, id} = data;

    const confirmar = confirm(`Estas seguro de que queres eliminar a ${name} de ${constellation}?`)

    if (!confirmar) {
        return
    } else {
        const ENDPOINT = `http://localhost:8000/santos/${id}`;

        const OPTIONS = {
            method: "DELETE",
            headers: {"content-type": "application/json"},
        }
    
        await axios(ENDPOINT, OPTIONS);
    
        readDB()
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;
