/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import ListOfAppointments from "./components/ListOfAppointments";
import Turnos from "./components/Turnos";

function App() {
  return (
    <>
      <header>
        <img
          src='/icon.png'
          alt='APP ICON'
          className='h-[120px] flex justify-center m-auto rounded-3xl mb-2'
        />
        <h1 className='font-sans text-4xl font-semibold text-black '>
          Appointment scheduler:
        </h1>
      </header>

      <Turnos />
      <ListOfAppointments />
    </>
  );
}

export default App;
