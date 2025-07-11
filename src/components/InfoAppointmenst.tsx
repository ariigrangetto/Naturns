import { Calendar1, CircleX, Clock2 } from "lucide-react";
import { useAppointmentStore } from "../Store/useAppointmentStore";
import type { Appointments } from "../types.d";

/* eslint-disable react/react-in-jsx-scope */
interface InfoAppointmentsPros {
  appointments: Appointments[];
}

export function InfoAppointments({ appointments }: InfoAppointmentsPros) {
  const deleteAppointment = useAppointmentStore(
    (state) => state.deleteAppointment
  );

  const handleDelete = (id: string) => {
    deleteAppointment(id);
  };
  return (
    <>
      <h2 className='mt-2'>
        Pending appointments:
        <strong className='ml-2'>{appointments.length}</strong>
      </h2>

      <ul className='mt-5 flex flex-col gap-4'>
        {appointments.map((item) => {
          return (
            <li
              key={item.id}
              className='bg-white shadow-md rounded-2xl p-4 border border-gray-200'
            >
              <p className='text-lg font-semibold text-black'>
                <p className='font-bold items-center flex justify-center m-auto'>
                  Client: <p className='font-semibold ml-1'> {item.name}</p>
                </p>
              </p>
              <p className='text-sm text-gray-600'>{item.section}</p>
              <p className='text-sm text-gray-600'>{item.description}</p>
              <p className='text-sm text-center items-center text-gray-600 justify-center flex m-auto'>
                <Clock2 size={15} className=' mr-1' />
                {item.time}
              </p>
              <p className='text-sm text-gray-600 items-center justify-center flex m-auto'>
                <Calendar1 size={15} className='mr-1' />
                {item.date}
              </p>
              <button
                onClick={() => handleDelete(item.id)}
                className='mt-3 bg-[rgba(255,197,183,0.69)] hover:bg-[rgb(255,202,189)] transition-all text-black px-4 py-1 rounded-full font-medium text-center flex justify-center m-auto items-center'
              >
                <CircleX size={15} className='mr-1' />
                <p className=''>Delete</p>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
