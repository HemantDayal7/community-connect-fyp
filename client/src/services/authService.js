import axios from "../utils/api";

// API call to get user details
export const getUser = async (token) => {
  try {
    const res = await axios.get("/auth/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// API call for user login
export const loginUser = async (userData) => {
  try {
    const res = await axios.post("/auth/login", userData);
    return res.data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

// API call for user registration
export const registerUser = async (userData) => {
  try {
    const res = await axios.post("/auth/signup", userData);
    return res.data;
  } catch (error) {
    console.error("Signup failed:", error);
    return null;
  }
};

// Logout function (optional for handling session)
export const logoutUser = () => {
  localStorage.removeItem("token");
};
