import { createContext, useContext, useState } from "react";

type FeedbackContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined,
);

const FeedBackProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <FeedbackContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </FeedbackContext.Provider>
  );
};

const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
};

export { useFeedback, FeedBackProvider };
