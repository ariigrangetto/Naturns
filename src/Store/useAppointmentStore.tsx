import { create } from "zustand";
import type { Appointments } from "../types";
import { persist } from "zustand/middleware";

interface AppointmentStore {
  appointment: Appointments[];
  saveAppointment: (appointment: Appointments) => void;
  deleteAppointment: (appointment: { id: string }) => void;
}

export const useAppointmentStore = create<AppointmentStore>()(
  persist(
    (set) => ({
      appointment: [],
      saveAppointment: (appointment) => {
        set((state) => ({
          appointment: [...state.appointment, appointment],
        }));
      },
      deleteAppointment: ({ id }) => {
        set((state) => ({
          appointment: state.appointment.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "appointments",
    }
  )
);

//zustand es un objeto en si pq siempre al querer actualizar el estado debemos indicarle de cual propiedad es
