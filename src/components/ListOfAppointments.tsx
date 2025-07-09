/* eslint-disable react/react-in-jsx-scope */

import { useAppointmentStore } from "../Store/useAppointmentStore";
import { InfoAppointments } from "./InfoAppointmenst";

export function WithoutAppointments() {
  return <p>Not pending appointments found</p>;
}

export default function ListOfAppointments() {
  const appointments = useAppointmentStore((state) => state.appointment);

  const hasAppointments = appointments.length > 0;
  return hasAppointments ? (
    <InfoAppointments appointments={appointments} />
  ) : (
    <WithoutAppointments />
  );
}
