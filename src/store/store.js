import { create } from "zustand";

const initialState = {
  token: null,
  isAuthenticated: false,
  account: null,
  error: null,
  successPopOpen: false,
  successMessage: "",
};

const useStore = create((set) => ({
  ...initialState,

  setAuthData: ({ token, account }) => {
    set({ token, isAuthenticated: true, account });
    localStorage.setItem("token", token);
    localStorage.setItem("account", JSON.stringify(account));
  },

  logout: () => {
    set({ token: null, isAuthenticated: false, account: null });
    localStorage.removeItem("token");
    localStorage.removeItem("account");
  },

  checkAuthentication: () => {
    const token = localStorage.getItem("token");
    const account = localStorage.getItem("account");
    if (token && account) {
      try {
        if (account && account !== "undefined" && account !== "null") {
          const parsedAccount = JSON.parse(account);
          set({ token, isAuthenticated: true, account: parsedAccount });
        } else {
          set({ token: null, isAuthenticated: false, account: null });
        }
      } catch (error) {
        console.error("Error parsing account from localStorage:", error);
        set({ token: null, isAuthenticated: false, account: null });
      }
    } else {
      set({ token: null, isAuthenticated: false, account: null });
    }
  },

  setError: (error) => set({ error }),

  resetError: () => set({ error: null }),

  setSuccessPopOpen: (open) => set({ successPopOpen: open }),

  setSuccessMessage: (message) => set({ successMessage: message }),
}));

const useAuth = () => {
  const {
    token,
    isAuthenticated,
    account,
    setAuthData,
    logout,
    setError,
    error,
    resetError,
    checkAuthentication,
  } = useStore();

  return {
    token,
    isAuthenticated,
    account,
    setAuthData,
    logout,
    setError,
    error,
    resetError,
    checkAuthentication,
  };
};

export { useStore, useAuth };
