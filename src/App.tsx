import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import SplashScreen from "./components/SplashScreen";

function App() {
  return (
    <>
      <SplashScreen />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
