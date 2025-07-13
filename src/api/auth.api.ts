import type { IUserRegisterDto } from "@/interface/user.interface";
import axiosInstance from "@/lib/axiosInstance";

export const login = async () => {};
export const register = async (data: IUserRegisterDto) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    console.log("🚀 ~ register ~ response:", response);
  } catch (error) {
    console.log("error", error);
  }
};
