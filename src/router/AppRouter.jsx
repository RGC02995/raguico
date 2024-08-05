import { Route, Routes } from "react-router-dom";
//Components
import { DefaultPage } from "../pages/default-page/DefaultPage";
import { AboutMe } from "../pages/about-me/AboutMe";
import { Proyects } from "../pages/proyects/Proyects";
import { Experience } from "../pages/Experience";
import { Footer } from "../components/footer/Footer";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/proyects" element={<Proyects />} />

        <Route path="*" element={<DefaultPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
