import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";

import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }}
    >
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
