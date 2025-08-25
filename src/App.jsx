import { Route, Routes } from "react-router-dom";
// Components:
import Navbar from "@components/Layout/Navbar";
import CTA from "@components/Layout/CTA";
import Footer from "@components/Layout/Footer";

// Pages:
import HomePage from "@pages/HomePage";
import MoviesPage from "@pages/Movies/MoviesPage";
import ShowsPage from "@pages/Shows/ShowsPage";
import MovieDetailsPage from "@pages/Movies/MovieDetailsPage";
import ShowDetailsPage from "@pages/Shows/ShowDetailsPage";
import SupportPage from "@pages/SupportPage";
import SubscriptionsPage from "@pages/SubscriptionsPage";
import SearchPage from "@pages/SearchPage";
import NotFoundPage from "@pages/NotFoundPage";

function App() {
  return (
    <div className="App bg-black-color-8 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/shows/:showId" element={<ShowDetailsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;