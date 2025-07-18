/* eslint-disable react/react-in-jsx-scope */

import { Frown } from "lucide-react";
import { useAppointmentStore } from "../Store/useAppointmentStore";
import { InfoAppointments } from "./InfoAppointmenst";

export function WithoutAppointments() {
  return (
    <div className='flex justify-center m-auto'>
      <p className='mt-5 justify-center m-auto items-center text-center flex'>
        Not pending appointments found <Frown className='ml-2' />
      </p>
    </div>
  );
}

export default function ListOfAppointments() {
  const appointments = useAppointmentStore((state) => state.appointment);

  const sortedAppointments = (() => {
    return appointments.toSorted((a, b) => {
      const dateA = a.date ?? "";
      //usa a.date si no es undefined o null, si lo es usa ""
      const dateB = b.date ?? "";
      const timeA = a.time ?? "";
      const timeB = a.time ?? "";

      const fullDateA = new Date(`${dateA}T${timeA}`);
      const fullDateB = new Date(`${dateB}T${timeB}`);

      return fullDateA.getTime() - fullDateB.getTime();
    });
  })();

  const hasAppointments = appointments.length > 0;
  return hasAppointments ? (
    <InfoAppointments appointments={sortedAppointments} />
  ) : (
    <WithoutAppointments />
  );
}
