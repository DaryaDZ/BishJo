import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4)

interface MovieType{
  movies: {
    movieId: number;
    courseId: number;
    masterId: number;
    video: string;
    category: string|null;
  }[]
  
};
const initialState: MovieType ={
  movies: [
    { movieId:uuidv4(),
      courseId: 111,
      masterId: 1,
      video: "photoshop.mp4",
      category: "طراحی گرافیک",
    },
    { movieId:uuidv4(),
      courseId: 112,
      masterId: 2,
      video: "blendersvideo.mp4",
      category: "انیمیشن سازی",
      
    },
    { movieId:uuidv4(),
      courseId: 113,
      masterId: 2,
      video: "blendersvideo.mp4",
      category: "انیمیشن سازی",
    },
    { movieId:uuidv4(),
      courseId: 114,
      masterId: 2,
      video: "blendersvideo.mp4",
      category: "انیمیشن سازی",
    },
    { movieId:uuidv4(),
      courseId: 115,
      masterId: 2,
      video: "blendersvideo.mp4",
      category: "انیمیشن سازی",
    },
    { movieId:uuidv4(),
      courseId: 116,
      masterId: 1,
      video: "Illustrator.mp4",
      category: "ایلاستریتور",
    },
    { movieId:uuidv4(),
      courseId: 117,
      masterId: 1,
      video: "photoshop.mp4",
      category: "طراحی گرافیک",
    },
    { movieId:uuidv4(),
      courseId: 118,
      masterId: 1,
      video: "Illustrator.mp4",
      category: "ایلاستریتور",
    },
]
}
export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push({
        movieId:uuidv4(),
        courseId: action.payload.courseId,
        masterId: action.payload.masterId,
        video: action.payload.video,
        category:action.payload.category
      })
      console.log(action.payload)
}
  }
})
export const {addMovie} = MovieSlice.actions;

export default MovieSlice.reducer;