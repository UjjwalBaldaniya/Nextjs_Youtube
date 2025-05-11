import { fetcherInstance } from "@/apiInstances/fetcherInstance";
import { IAuthResponse, ILoginFormInputs } from "@/types/auth.type";
import { getErrorMessage } from "@/utils/getErrorMessage";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const signinService = async (body: ILoginFormInputs) => {
  try {
    const response = await fetcherInstance<IAuthResponse>("users/login", {
      method: "POST",
      body,
    });
    toast.success(response.message);

    Cookies.set("auth_token", response?.data?.accessToken, {
      expires: 7,
      secure: true,
      sameSite: "Lax", // Avoid cross-site issues
    });

    return response;
  } catch (error) {
    toast.error(getErrorMessage(error));
  }
};

export const signupService = async (body: FormData) => {
  try {
    const response = await fetcherInstance<IAuthResponse>("users/register", {
      method: "POST",
      body,
    });
    toast.success(response.message);
    return response;
  } catch (error) {
    toast.error(getErrorMessage(error));
  }
};
