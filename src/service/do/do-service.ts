import { RunFormData } from "@/routes/do/add-run/add-run";
import { WorkoutFormData } from "@/routes/do/add-workout/add-workout";
import { axios } from "../axios";

export class DoService {
  static async addWorkout(workout: WorkoutFormData) {
    console.log("🚀 ~ DoService ~ addWorkout ~ workout:", workout);
    return axios.post("/do/workout", {
      ...workout,
      date: new Date(workout.date),
    });
  }

  static async addRun(run: RunFormData) {
    return axios.post("/do/run", { ...run, date: new Date(run.date) });
  }
}
