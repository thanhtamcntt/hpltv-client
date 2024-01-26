import { configureStore } from '@reduxjs/toolkit';
import { SeriesSlice } from './slice/home/series';
import { MoviesSlice } from './slice/home/movies';
import { CategorySlice } from './slice/category/category';
import { MoviesMostNewSlice } from './slice/film/MostNew';
import { MoviesMostRatingSlice } from './slice/film/MostRating';
import { MoviesMostViewSlice } from './slice/film/MostView';
import { SameMoviesSlice } from './slice/film/SameMovies';
import { CommentSlice } from './slice/comment/comment';
export const store = configureStore({
  reducer: {
    seriesSlice: SeriesSlice.reducer,
    moviesSlice: MoviesSlice.reducer,
    categorySlice: CategorySlice.reducer,
    moviesMostNewSlice: MoviesMostNewSlice.reducer,
    moviesMostRatingSlice: MoviesMostRatingSlice.reducer,
    moviesMostViewSlice: MoviesMostViewSlice.reducer,
    sameMoviesSlice: SameMoviesSlice.reducer,
    commentSlice: CommentSlice.reducer,
  },
});
