import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import Layout from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route
          path="*"
          element={
            <div>
              <h1>404 - Page Not Found</h1>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
