import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import api from "../utils/api";
import requests from "../utils/requests";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function Home() {
  const [netflixOriginals, setnetflixOriginals] = useState([]);
  const [trendingNow, settrendingNow] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [actionMovies, setactionMovies] = useState([]);
  const [comedyMovies, setcomedyMovies] = useState([]);
  const [horrorMovies, sethorrorMovies] = useState([]);
  const [romanceMovies, setromanceMovies] = useState([]);
  const [documentaries, setdocumentaries] = useState([]);
  const { t, i18n } = useTranslation();
  console.log(i18n.dir() == "rtl");
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
  return (
    <div
      className={`relative h-screen bg-gradient-to-b from-[#ffffff17] to-black  lg:h-[140vh]  `}
    >
      <Header />
      <main
        className={`relative  pb-24 lg:space-y-24 ${
          i18n.dir() == "rtl" ? "pr-4 lg:pr-7 " : "pl-4 lg:pl-7"
        }  `}
      >
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title={t("common:common.TrendingNow")} movies={trendingNow} />
          <Row title={t("common:common.Top_Rated")} movies={topRated} />
          <Row
            title={t("common:common.ActionThrillers")}
            movies={actionMovies}
          />

          <Row title={t("common:common.Comedies")} movies={comedyMovies} />
          <Row title={t("common:common.ScaryMovies")} movies={horrorMovies} />
          <Row
            title={t("common:common.RomanceMovies")}
            movies={romanceMovies}
          />
          <Row
            title={t("common:common.Documentaries")}
            movies={documentaries}
          />
        </section>
      </main>
    </div>
  );
}

export default Home;
