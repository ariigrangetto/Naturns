import { useId, useState } from "react";
import { useAppointmentStore } from "../Store/useAppointmentStore";
import type { Appointments } from "../types.d";
import { MousePointerClick } from "lucide-react";

/* eslint-disable react/react-in-jsx-scope */
export default function Turnos() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [section, setSection] = useState<string>("");

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

    setName("");
    setDate("");
    setSection("");
    setDescription("");
    setTime("");

    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <button
        onClick={toggleForm}
        className='bg-[rgba(255,197,183,0.77)] py-2 px-5 mt-5 rounded-[100px] font-medium text-black hover:bg-purple-300 transition-all ease-in  '
      >
        <p className='justify-center item-center flex'>
          New appointment
          <MousePointerClick className='ml-2' />
        </p>
      </button>
      {showForm && (
        <div className=' bg-gray-100 mt-5 rounded-2xl p-4 shadow-md mb-5 max-w-sm'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <label htmlFor={nameId} className='text-black font-medium'>
              Client name:
            </label>
            <input
              className='bg-white px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(255,197,183,0.77)]'
              type='text'
              id={nameId}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor={sectionId} className='text-black font-medium'>
              Section:
            </label>
            <select
              name='select section'
              id={sectionId}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSection(e.target.value)
              }
              className='bg-white px-3 py-2 rounded-xl border-gray-300focus:outline-none focus:ring-2 focus:ring-[rgba(255,197,183,0.77)]'
              value={section}
            >
              <option value='' disabled>
                Chosee a section
              </option>
              <option value='Nails'>Nails</option>
              <option value='Hair'>Hair</option>
            </select>

            <label htmlFor={descriptionId} className='text-black font-medium'>
              Description:
            </label>
            <input
              type='text'
              id={descriptionId}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='bg-white px-3 py-2 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(255,197,183,0.77)]'
            />

            <label htmlFor={timeId} className='text-black font-medium'>
              Time:
            </label>
            <input
              type='time'
              id={timeId}
              value={time}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTime(e.target.value)
              }
              className='bg-white px-3 py-2 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(255,197,183,0.77)]'
            />

            <label htmlFor={dateId} className='text-black font-medium'>
              Date:
            </label>
            <input
              type='date'
              id={dateId}
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDate(e.target.value)
              }
              className='bg-white px-3 py-2 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgba(255,197,183,0.77)]'
            />
          </form>

          <button
            type='submit'
            onClick={handleClick}
            className='bg-[rgba(255,197,183,0.77)] mt-3 py-2 px-4 rounded-full font-medium text-black hover:bg-purple-300 transition-all ease-in'
          >
            Save appoitment
          </button>
        </div>
      )}
    </>
  );
}
