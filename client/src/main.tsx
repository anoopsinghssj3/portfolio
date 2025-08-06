import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Skip service worker for development
// Will be enabled in production

createRoot(document.getElementById("root")!).render(<App />);
