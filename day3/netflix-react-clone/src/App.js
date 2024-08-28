import { Container } from "react-bootstrap";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbarflix from "./components/Navbarflix";
import Titleflix from "./components/Titleflix";
import Footerflix from "./components/Footerflix";
import Movieflix from "./components/Movieflix";
import MovieDetails from "./components/MovieDetails";
/* import NavbarflixProfile from "./components/NavbarflixProfile";
import ProfileFlix from "./components/Profileflix"; */
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };
  console.log(data);
  return (
    <BrowserRouter>
      <Container fluid data-bs-theme="dark" className="bg-dark-subtle p-0">
        {/*Questa è la pagina profile*/}
        {/* <Container className="py-5" datadata-bs-theme="dark">
          <header>
              <NavbarflixProfile />
          </header>
          <main className="py-5">
            <ProfileFlix />
          </main>
      </Container> */}
        <header>
          <Navbarflix childToParent={childToParent} />
        </header>
        <main className="py-3 px-2">
          <Routes>
            <Route
              path="/"
              element={
                !data ? (
                  <>
                    <Container fluid className="mb-4">
                      <Titleflix title='Browse'/>
                    </Container>
                    <Movieflix searched="Harry Potter" genre="" />
                    <Movieflix searched="Star Wars" genre="" />
                    <Movieflix searched="Avengers" genre="" />
                  </>
                ) : (
                  <>
                    <Container fluid className="mb-4">
                      <Titleflix />
                    </Container>
                    <Movieflix searched={data} genre="" />
                  </>
                )
              }
            ></Route>
            <Route
              path="/shows"
              element={
                !data ? (
                  <>
                    <Container fluid className="mb-4">
                      <Titleflix title='Tv Shows'/>
                    </Container>
                    <Movieflix searched="Lost" genre="series" />
                    <Movieflix searched="Game" genre="series" />
                    <Movieflix searched="Black" genre="series" />
                  </>
                ) : (
                  <>
                    <Container fluid className="mb-4">
                      <Titleflix title='Tv Shows'/>
                    </Container>
                    <Movieflix searched={data} genre="series" />
                  </>
                )
              }
            ></Route>
            <Route
              path="/movies"
              element={
                !data ? (
                  <>
                    <Container fluid className="mb-4">
                      <Titleflix title='Movies'/>
                    </Container>
                    <Movieflix searched="X-Men" genre="movie" />
                    <Movieflix searched="Creed" genre="movie" />
                    <Movieflix searched="Fast" genre="movie" />
                  </>
                ) : (
                  <>
                    <Container fluid className="mb-4">
                      <Titleflix />
                    </Container>
                    <Movieflix searched={data} genre="movie" />
                  </>
                )
              }
            ></Route>
            <Route path="/details/:movieId" element={<MovieDetails />}></Route>
          </Routes>
        </main>
        <footer className="pt-5">
          <Footerflix />
        </footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
