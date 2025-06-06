import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';
const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      getMovieVideos();
    },[])
    const getMovieVideos=async()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options);
      const json=await data.json();
      console.log(json);
      const [trailer]=json.results.filter(video=>video.type==='Trailer');
      dispatch(addTrailerVideo(trailer));
      console.log(trailer);
    }
}

export default useMovieTrailer;