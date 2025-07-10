/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import ListOfAppointments from "./components/ListOfAppointments";
import Turnos from "./components/Turnos";

function App() {
  return (
    <>
      <h1 className='font-sans text-4xl font-semibold text-black'>
        Appointment scheduler:
      </h1>
      <Turnos />
      <ListOfAppointments />
    </>
  );
}

export default App;
