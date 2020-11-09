import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={DetailPage} />
        <Route path="/c/:category" exact component={CategoryPage} />
      </BrowserRouter>
    </div>
  );
}
