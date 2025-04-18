import { BrowserRouter as Router, Routes, Route } from "react-router";
import { routesConfig } from "./routesConfig";

function App() {
  return (
    <Router>
      <Routes>
        {routesConfig.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
