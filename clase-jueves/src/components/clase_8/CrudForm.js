import { useState, useEffect } from "react"



const CrudForm = ({createRecord, updateRecord, dataToEdit, setDataToEdit}) => {

    const initialState = {
        id: null,
        name: "",
        constellation: ""
    }

    const [form, setForm] = useState(initialState)

    useEffect(() => {
        if(dataToEdit){ // Si dataToEdit, viene con datos / tiene a vedadero
            setForm(dataToEdit)
        } else {
            setForm(form)
        }
    }, [dataToEdit]) // null -> caballero
    

    const handleChange = (event) => setForm((form) => {
        return {
            ...form,
            [event.target.name]: event.target.value
        }
    })
    const handleSubmit = (event) => {
        event.preventDefault()

        if(!form.name || !form.constellation){
            return alert('Datos incompletos')
        }

        if(form.id === null){
            createRecord(form)
        } else {
            updateRecord(form)
        }

        handleReset()
    }

    const handleReset = () => {
        setForm(initialState)
        setDataToEdit(null)
    }

    return (
      <div>
          <h3>Agregar</h3>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
              <input type="text" name="constellation" placeholder="constellation" onChange={handleChange} value={form.constellation}/>
              <input type="submit" value="Enviar"/>
              <input type="reset" value="Limpiar" onClick={handleReset}/>
          </form>
      </div>
    )
  }
  export default CrudForm













