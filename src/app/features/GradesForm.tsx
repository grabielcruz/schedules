import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grade } from "../../types";
import { addGrade } from "./gradesSlice";

const GradesForm: React.FC<Props> = ({ zeroGrade }) => {
  const [grade, setGrade] = useState<Grade>(zeroGrade);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setGrade((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setGrade(zeroGrade);
  };

  const createGrade = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addGrade(grade));
    clearForm();
  };

  return (
    <form onSubmit={(e) => createGrade(e)}>
      <label htmlFor="Name">Nombre:</label>
      <input
        type="text"
        name="Name"
        value={grade.Name}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Crear Grado</button>
      <button type="button" onClick={clearForm}>Limpiar</button>
    </form>
  );
};

interface Props {
  zeroGrade: Grade;
}

export default GradesForm;
