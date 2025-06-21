import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 2,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
