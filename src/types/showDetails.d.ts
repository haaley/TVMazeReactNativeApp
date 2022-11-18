interface ShowDetails {
  id:             number;
  url:            string;
  name:           string;
  type:           string;
  language:       string;
  genres:         string[];
  status:         string;
  runtime:        number;
  averageRuntime: number;
  premiered:      Date;
  ended:          Date;
  officialSite:   string;
  schedule:       Schedule;
  rating:         Rating;
  weight:         number;
  network:        Network;
  webChannel:     null;
  dvdCountry:     null;
  externals:      Externals;
  image:          Image;
  summary:        string;
  updated:        number;
  _links:         ShowDetailsLinks;
  _embedded:      Embedded;
}

interface Embedded {
  episodes: Episode[];
}

interface Episode {
  id:       number;
  url:      string;
  name:     string;
  season:   number;
  number:   number;
  type:     Type;
  airdate:  Date;
  airtime:  Time;
  airstamp: Date;
  runtime:  number;
  rating:   Rating;
  image:    Image;
  summary:  string;
  _links:   EpisodeLinks;
}

interface EpisodeLinks {
  self: Previousepisode;
  show: Previousepisode;
}

interface Previousepisode {
  href: string;
}

enum Time {
  The2100 = "21:00",
  The2200 = "22:00",
}

interface Image {
  medium:   string;
  original: string;
}

interface Rating {
  average: number;
}

enum Type {
  Regular = "regular",
}

interface ShowDetailsLinks {
  self:            Previousepisode;
  previousepisode: Previousepisode;
}

interface Externals {
  tvrage:  number;
  thetvdb: number;
  imdb:    string;
}

interface Network {
  id:           number;
  name:         string;
  country:      Country;
  officialSite: string;
}

interface Country {
  name:     string;
  code:     string;
  timezone: string;
}

interface Schedule {
  time: Time;
  days: string[];
}
