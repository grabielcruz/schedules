import { useSelector } from "react-redux";
import { Grade } from "../../types";
import { RootState } from "../store";
import GradesForm from "./GradesForm";

const Grades = () => {
  const zeroGrade: Grade = {
    Name: "",
    Subjects: [],
    HoursPerDay: null,
    HoursPerWeek: 0,
  };

  const grades = useSelector((state: RootState) => state.Grades);

  return (
    <div>
      <GradesForm zeroGrade={zeroGrade} />
      {grades.length > 0 && (
        <div>
          <h1>Grades</h1>
          {grades.map((grade, i) => (
            <p key={i}>{grade.Name}</p>
          ))}
        </div>
      )}
      {grades.length === 0 && <h2>No hay grados registrados</h2>}
    </div>
  );
};

export default Grades;
