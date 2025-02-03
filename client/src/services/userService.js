import API from "../utils/api";

export const getProfile = async () => {
  try {
    const response = await API.get("/api/auth/profile");
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Failed to fetch profile" };
  }
};
