import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import api from "../utils/api";
import requests from "../utils/requests";
import Header from "../components/Header";

function Home() {
  const [netflixOriginals, setnetflixOriginals] = useState([]);
  const [trendingNow, settrendingNow] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [actionMovies, setactionMovies] = useState([]);
  const [comedyMovies, setcomedyMovies] = useState([]);
  const [horrorMovies, sethorrorMovies] = useState([]);
  const [romanceMovies, setromanceMovies] = useState([]);
  const [documentaries, setdocumentaries] = useState([]);
  useEffect(() => {
    api
      .fetchMovies(requests.fetchNetflixOriginals)
      .then((response) => setnetflixOriginals(response.results));
    api
      .fetchMovies(requests.fetchTrending)
      .then((response) => settrendingNow(response.results));
    api
      .fetchMovies(requests.fetchTopRated)
      .then((response) => settopRated(response.results));
    api
      .fetchMovies(requests.fetchActionMovies)
      .then((response) => setactionMovies(response.results));
    api
      .fetchMovies(requests.fetchComedyMovies)
      .then((response) => setcomedyMovies(response.results));
    api
      .fetchMovies(requests.fetchHorrorMovies)
      .then((response) => sethorrorMovies(response.results));
    api
      .fetchMovies(requests.fetchRomanceMovies)
      .then((response) => setromanceMovies(response.results));
    api
      .fetchMovies(requests.fetchDocumentaries)
      .then((response) => setdocumentaries(response.results));
  }, []);
  console.log(netflixOriginals);
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh] `}>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
    </div>
  );
}

export default Home;
