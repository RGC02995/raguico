import { Route, Routes } from "react-router-dom";
//Components
import { NavBar } from "../components/navbar/NavBar";
import { DefaultPage } from "../pages/default-page/DefaultPage";
import { HomePage } from "../pages/HomePage";
import { AboutMe } from "../pages/AboutMe";
import { Proyects } from "../pages/Proyects";
import { Experience } from "../pages/Proyects copy";
import { Footer } from "../components/footer/Footer";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/proyects" element={<Proyects />} />

        <Route path="*" element={<DefaultPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
