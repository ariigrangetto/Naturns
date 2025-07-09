/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import ListOfAppointments from "./components/ListOfAppointments";
import Turnos from "./components/Turnos";

function App() {
  return (
    <>
      <Turnos />
      <ListOfAppointments />
    </>
  );
}

export default App;
