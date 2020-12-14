import React  from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";

import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import 'semantic-ui-css/semantic.min.css'

import ActorDetailPage from '../src/components/ActorDetails'
import PageActorTemplate from '../src/components/templateActorPage'
import ActorList from '../src/components/ActorList'
import ActorCard from '../src/components/ActorCard'
import ActorHeader from "../src/components/headerActor";
import Login from "../src/components/login"
import Logout from '../src/components/Signout'
import Signup from '../src/components/SignUp'
import GiveRate from '../src/components/GiveRate'
import 'firebase/auth'
import { FirebaseAppProvider } from 'reactfire' ;
// const MovieCard = lazy(() => import("../src/components/movieCard"));
// const FilterControls = lazy(() => import("../src/components/filterControls"));
// const MoviesHeader = lazy(() => import("../src/components/headerMovieList"));
// const MovieList = lazy(() => import("../src/components/movieList"));
// const  MovieHeader = lazy(() => import("../src/components/headerMovie"));
// const  MovieDetails = lazy(() => import("../src/components/movieDetails"));

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};
const sampleActor={
  "adult": false,
  "known_for": [
    {
      "adult": false,
      "backdrop_path": "/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 24428,
      "media_type": "movie",
      "original_language": "en",
      "original_title": "The Avengers",
      "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      "release_date": "2012-04-25",
      "title": "The Avengers",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 23589
    },
    {
      "adult": false,
      "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 299536,
      "media_type": "movie",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "release_date": "2018-04-25",
      "title": "Avengers: Infinity War",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 20369
    },
    {
      "adult": false,
      "backdrop_path": "/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 271110,
      "media_type": "movie",
      "original_language": "en",
      "original_title": "Captain America: Civil War",
      "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
      "poster_path": "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
      "release_date": "2016-04-27",
      "title": "Captain America: Civil War",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 17150
    }
  ],
  "also_known_as": [
    "Scarlett Johanssen",
    "Скарлетт Йоганссон",
    "Скарлетт Йоханссон",
    "Scarlett Ingrid Johansson",
    "스칼릿 조핸슨",
    "سكارليت جوهانسون",
    "史嘉蕾·喬韓森",
    "สการ์เลตต์ โจแฮนส์สัน",
    "スカーレット・ヨハンソン",
    "斯嘉丽·约翰逊",
    "스칼렛 요한슨",
    "Σκάρλετ Τζοχάνσον",
    "اسکارلت جوهانسون"
  ],
  "biography": "Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppola's Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.\n\nA role in A Love Song for Bobby Long (2004) earned Johansson her third Golden Globe for Best Actress nomination. Johansson garnered another Golden Globe nomination for Best Supporting Actress with her role in Woody Allen's Match Point (2005). She has played the Marvel comic book character Black Widow/Natasha Romanoff in Iron Man 2 (2010), The Avengers (2012), and Captain America: The Winter Soldier (2014), Avengers: Age of Ultron (2015), Captain America: Civil War (2016), Avengers: Infinity War (2018), Avengers: Endgame (2019), and Black Widow (2020). The 2010 Broadway revival of Arthur Miller's A View From the Bridge won Johansson the Tony Award for Best Performance by a Featured Actress in a Play. As a singer, Johansson has released two albums, Anywhere I Lay My Head and Break Up.\n\nJohansson was nominated for two Academy Awards in 2020 for her work in Marriage Story (2019), and Jojo Rabbit (2019).  Johansson was born in New York City. Her father, Karsten Johansson, is a Danish-born architect, and her paternal grandfather, Ejner Johansson, was a screenwriter and director. Her mother, Melanie Sloan, a producer, comes from an Ashkenazi Jewish family from the Bronx. Johansson has an older sister, Vanessa, who is an actress; an older brother, Adrian; a twin brother, Hunter (who appeared in the film Manny & Lo with Scarlett); and a half-brother, Christian, from her father's re-marriage .",
  "birthday": "1984-11-22",
  "deathday": null,
  "gender": 1,
  "homepage": null,
  "id": 1245,
  "imdb_id": "nm0424060",
  "known_for_department": "Acting",
  "name": "Scarlett Johansson",
  "place_of_birth": "New York City, New York, USA",
  "popularity": 46.772,
  "profile_path": "/3JTEc2tGUact9c0WktvpeJ9pajn.jpg"
}

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MemoryRouter><MovieDetails movie={sample} /></MemoryRouter>
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);


  storiesOf("Movie Details Page/GiveRate", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <GiveRate  />);





  storiesOf("Actor Details Page/ActorDetailPage", module).add("default", () => (
    <MemoryRouter><ActorDetailPage actor={sampleActor} /></MemoryRouter>
  ));

  storiesOf("Actor Details Page/PageActorTemplate", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () =>   <MemoryRouter>< PageActorTemplate actor={sampleActor} /></MemoryRouter>);




  storiesOf("Actor Details Page/ActorDetailPage", module).add("default", () => (
    <MemoryRouter><ActorDetailPage actor={sampleActor} /></MemoryRouter>
  ));

  storiesOf("Actor Details Page/PageActorTemplate", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () =>   <MemoryRouter>< PageActorTemplate actor={sampleActor} /></MemoryRouter>);



  storiesOf("Actor Page/ActorList", module)
  .addDecorator(story => (
    <MemoryRouter >{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const actors = [sampleActor, sampleActor, sampleActor, sampleActor, sampleActor];
    return (
      <ActorList
        actors={actors}
      />
    );
  });


  storiesOf("Actor Page/HeaderActor", module)
  .addDecorator(story => (
    <MemoryRouter >{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <ActorHeader
        actors={sampleActor}
      />
    );
  });


  storiesOf("Actor Page/ActorCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <ActorCard
      actors={sampleActor}

    />
  ))


  storiesOf("Login Page/Login", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <FirebaseAppProvider>
    <Login
    

    />
      </FirebaseAppProvider>
  ))
  

  storiesOf("Login Page/Signup", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <FirebaseAppProvider>
    <Signup
    

    />
    </FirebaseAppProvider>
  ))

  storiesOf("Login Page/Logout", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <FirebaseAppProvider>
    <Logout
    

    />
    </FirebaseAppProvider>
  ))
