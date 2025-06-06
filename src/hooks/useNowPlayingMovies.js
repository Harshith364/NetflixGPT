import { useDispatch } from "react-redux";
import { options,url } from "../utils/constants";
import {addNowPlayingMovies} from "../utils/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchMovieData();
    },[])
    const fetchMovieData=async()=>{
        const data=await fetch(url,options);
        const json=await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;