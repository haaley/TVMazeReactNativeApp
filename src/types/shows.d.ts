interface Show {
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
  webChannel:     Network;
  dvdCountry:     null;
  externals:      Externals;
  image:          Image;
  summary:        string;
  updated:        number;
  _links:         Links;
}

interface Links {
  self:            Previousepisode;
  previousepisode: Previousepisode;
}

interface Previousepisode {
  href: string;
}

interface Externals {
  tvrage:  number;
  thetvdb: number;
  imdb:    string;
}

interface Image {
  medium:   string;
  original: string;
}

interface Network {
  id:           number;
  name:         string;
  country:      Country;
  officialSite: null;
}

interface Country {
  name:     string;
  code:     string;
  timezone: string;
}

interface Rating {
  average: null;
}

interface Schedule {
  time: string;
  days: string[];
}

interface SearchResult {
  score: number;
  show: Show;
}