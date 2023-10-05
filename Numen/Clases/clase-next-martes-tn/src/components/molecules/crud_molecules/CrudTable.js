import CrudTableRow from "@/components/atoms/crud_atoms/CrudTableRow";
import Loader from "@/components/atoms/request/Loader";

const CrudTable = ({ data, deleteData, setDataToEdit }) => {
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
          {data.length === 0 && (
            <tr>
              <td colSpan="3">
                <Loader />
              </td>
            </tr>
          )}
          {data.length !== 0 &&
            data.map((caballero) => (
              <CrudTableRow
                key={caballero.id}
                caballero={caballero}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
