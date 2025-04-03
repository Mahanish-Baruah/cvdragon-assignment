import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SideBarMenu from "./pages/SideBarMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sidebar" element={<SideBarMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
