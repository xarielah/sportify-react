import type { User } from "../../ui/app-context/app-context";
import config from "../config";

export class AuthService {
  public static async getProfile(): Promise<User | null> {
    try {
      const res = await fetch(config.backendUrl + "/auth/google/profile", {
        credentials: "include",
      });
      if (res.status === 200) {
        return await res.json();
      } else {
        return null;
      }
    } catch (_) {
      return null;
    }
  }

  public static async logout(): Promise<void> {
    try {
      await fetch(config.backendUrl + "/auth/google/logout", {
        credentials: "include",
      });
    } catch (_) {}
    window.location.replace("/");
  }
}
