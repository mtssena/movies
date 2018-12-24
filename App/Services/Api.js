import { create } from "apisauce";
import qs from "qs";

const api_url = "https://api.themoviedb.org/3/";
const api_key = "8efd84fcc33fa183b17b0ea326b74f0c";
const language = "pt-BR";

export default (baseURL = api_url) => {
  const api = create({
    baseURL,
    timeout: 10000
  });

  const movies = {
    latest: () =>
      api.get(`/movie/latest?${qs.stringify({ api_key, language })}`),
    popular: page =>
      api.get(`/movie/popular?${qs.stringify({ api_key, language, page })}`),
    top_rated: page =>
      api.get(`/movie/top_rated?${qs.stringify({ api_key, language, page })}`),
    upcoming: page =>
      api.get(`/movie/upcoming?${qs.stringify({ api_key, language, page })}`),
    details: id =>
      api.get(`/movie/${id}?${qs.stringify({ api_key, language })}`)
  };

  return {
    movies
  };
};
