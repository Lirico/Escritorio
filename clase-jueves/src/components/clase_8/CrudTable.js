import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ db, deleteRecord, setDataToEdit }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 && (
            <tr>
              <td colSpan="2">Datos no disponibles</td>
            </tr>
          )}
          {db.length !== 0 &&
            db.map((caballero) => (
              <CrudTableRow
                key={caballero.id}
                caballero={caballero}
                deleteRecord={deleteRecord}
                setDataToEdit={setDataToEdit}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default CrudTable;
