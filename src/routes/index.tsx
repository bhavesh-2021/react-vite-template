import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "@/pages";
import { PublicLayout } from "@/layouts";
import { NotFound } from "@/components";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
