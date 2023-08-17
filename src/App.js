import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Movie from "./pages/movie";
import { Provider } from "react-redux";
import store from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/MovieDetalis/:id" element={<Movie />} />
            </Routes>
          </AuthProvider>
        </I18nextProvider>
      </Provider>
    </Router>
  );
}

export default App;
