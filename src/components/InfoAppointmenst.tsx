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
    deleteAppointment({ id });
  };
  return (
    <ul>
      {appointments.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.section}</p>
            <p>{item.description}</p>
            <p>{item.time}</p>
            <p>{item.date}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
