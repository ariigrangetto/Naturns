/* eslint-disable react/react-in-jsx-scope */

import { useAppointmentStore } from "../Store/useAppointmentStore";
import { InfoAppointments } from "./InfoAppointmenst";

export function WithoutAppointments() {
  return <p>Not pending appointments found</p>;
}

export default function ListOfAppointments() {
  const appointments = useAppointmentStore((state) => state.appointment);

  const sortedAppointments = (() => {
    return appointments.toSorted((a, b) => {
      const dateA = a.date ?? "";
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
