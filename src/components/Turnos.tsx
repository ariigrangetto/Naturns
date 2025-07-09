import { useId, useState } from "react";
import { useAppointmentStore } from "../Store/useAppointmentStore";
import type { Appointments } from "../types.d";

/* eslint-disable react/react-in-jsx-scope */
export default function Turnos() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();
  const [section, setSection] = useState<string>();

  const saveAppointment = useAppointmentStore((state) => state.saveAppointment);

  const nameId = useId();
  const sectionId = useId();
  const descriptionId = useId();
  const timeId = useId();
  const dateId = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    const newAppointment: Appointments = {
      id: crypto.randomUUID(),
      name,
      description,
      time,
      date,
      section,
    };
    saveAppointment(newAppointment);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <h1>Appointment scheduler:</h1>
      <button onClick={toggleForm}>New appoiment</button>
      {showForm && (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor={nameId}>Client name:</label>
            <input
              type='text'
              id='nameId'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor={sectionId}>Section:</label>
            <select
              name='select section'
              id={sectionId}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSection(e.target.value)
              }
              value={section}
            >
              <option value='' disabled>
                Chosee a section
              </option>
              <option value='Nails'>Nails</option>
              <option value='Hair'>Hair</option>
            </select>
            <label htmlFor={descriptionId}>Description:</label>
            <input
              type='text'
              id={descriptionId}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor={timeId}>Time:</label>
            <input
              type='time'
              id={timeId}
              value={time}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTime(e.target.value)
              }
            />
            <label htmlFor={dateId}>Date:</label>
            <input
              type='date'
              id={dateId}
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDate(e.target.value)
              }
            />
          </form>

          <button type='submit' onClick={handleClick}>
            Save appoitment
          </button>
        </>
      )}
    </>
  );
}
