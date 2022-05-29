import React, { useState , useEffect} from "react";
import Banner from "../Banner"
import "./HomeScreen.css";
import Nav from "../Nav";
import requests, {API_KEY} from "../Request";
import Row from "../Row";


function HomeScreen() {
    const [searchStr, setSearchStr] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [userId, setUserId] = useState(1);
    const [recommendUrl, setRecommendUrl] = useState("");


    const handleSearch = async (str) => {
        if(str.length > 1) {
            setIsSearching(true);
            setSearchStr(`/search/movie?api_key=${API_KEY}&query=${str}`);
            setUserId(Math.floor(Math.random()*600)+1)
            console.log("FETCHING DATA")
            console.log(userId)
            setRecommendUrl(`http://127.0.0.1:8000/recommend/${userId}`);
            console.log(recommendUrl);

            // /discover/movie?api_key=9788ef17aca04b40d4b9454ad4277ca9&with_genres=99
        } else {
            setIsSearching(false);
        }
    }

    const trendingVids = requests.fetchTrending;
    const topRatedVids = requests.fetchTopRated;
    const actionVids = requests.fetchActionMovies
    const comedyVids = requests.fetchComedyMovies
    const horrorVids = requests.fetchHorrorMovies
    const documentaryVids = requests.fetchDocumentaries
    return (
    <div className="homeScreen">
         {/* Navbar  */}
    
        <Nav handleSearch={handleSearch}/>
        
        {/* { Banner } */}

        <Banner />

        {/* { Rows } */}
        {isSearching ? 
        <>
        <Row 
            title = 'Search Results' 
            fetchUrl = {searchStr}
            isLargeRow 
            /> 

        <Row 
            title = 'Based on what you like' 
            fetchUrl = {recommendUrl}
            isLargeRow 
            /> 
        </>
        :
        <>
            <Row 
            title = 'NETFLIX ORIGINALS' 
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow 
            />

            <Row title = 'Trending Now' fetchUrl = {trendingVids} /> 
            <Row title = 'Top Rated' fetchUrl = {topRatedVids} />
            <Row title = 'Action Movies' fetchUrl = {actionVids}/>
            <Row title = 'Comedy Movies' fetchUrl = {comedyVids} />
            <Row title = 'Horror Movies' fetchUrl = {horrorVids} />
            <Row title = 'Documentaries' fetchUrl = {documentaryVids}/>
        </>}

    </div>
    );
}

export default HomeScreen;