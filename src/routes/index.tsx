import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "@/pages";
import { PublicLayout } from "@/layouts";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
