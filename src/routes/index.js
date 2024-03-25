import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../components/Home';

import MoviesPage from '../components/page/MoviesPage';
import SeriesPage from '../components/page/SeriesPage';
import ResultPage from '../components/page/ResultPage';
import DetailFilmPage from '../components/page/DetailFilmPage';
import ProfilePage from '../components/page/ProfilePage';
import FilmForSeriesPage from '../components/page/FilmForSeriesPage';
import MyFavoritePage from '../components/page/MyFavoritePage';
import PaymentPage from '../components/page/PaymentPage';
import OptionCheckoutPage from '../components/page/OptionCheckoutPage';
import PaySuccessPage from '../components/page/PaySuccessPage';
import CheckoutFormComponent from '../components/Common/CheckoutFormComponent';

function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/my-favorite-movies" element={<MyFavoritePage />} />
      <Route path="/package-upgrade" element={<PaymentPage login={true} />} />
      <Route
        path="/payment-success"
        element={<PaySuccessPage login={true} />}
      />
      <Route
        path="/option-checkout"
        element={<OptionCheckoutPage login={true} />}
      />
      <Route
        path="/checkout"
        element={<CheckoutFormComponent login={true} />}
      />
      <Route path="/search" element={<ResultPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/my-profile" element={<ProfilePage />} />
      <Route
        path="/film/:filmId"
        element={<DetailFilmPage watching={false} />}
      />
      <Route path="/series/:seriesId" element={<FilmForSeriesPage />} />
      <Route
        path="/film/watching-movies/:filmId"
        element={<DetailFilmPage watching={true} />}
      />
    </Routes>
  );
}

export default Router;
