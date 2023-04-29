import { API_KEY } from "@/constants/config";
import { Headlines, Everything } from "@/interfaces/api.query";

export async function headline(params: Headlines) {
  try {
    const { country = "us", category, sources, q, pageSize, page } = params;

    // can't mix sources param with the country or category params.
    const queries = {
      q: q ? q : "",
      country: country ? country : "us",
      category: category ? category : "",
      sources: sources ? sources : "",
      pageSize: pageSize ? pageSize : 10,
      page: page ? page : 1
    }

    let url = "https://newsapi.org/v2/top-headlines";

    url = url.concat(`?apiKey=${API_KEY.newsapi}`);
    url = url.concat(`&country=${queries.country}`);
    url = url.concat(`&category=${queries.category}`);
    url = url.concat(`&sources=${queries.sources}`);
    url = url.concat(`&q=${queries.q}`);
    url = url.concat(`&pageSize=${queries.pageSize}`);
    url = url.concat(`&page=${queries.page}`);

    const response = await fetch(url, { method: "GET" });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`error`, error)
  }
}

export async function everything(params: Everything) {
  try {
    const { q, language, sortBy, pageSize, page, from, to, } = params;

    const queries = {
      q: q,
      language: language ? language : "en",
      sortBy: sortBy ? sortBy : "",
      pageSize: pageSize ? pageSize : 10,
      page: page ? page : 1,
      from: from ? from : "",
      to: to ? to : "",
    }

    let url = "https://newsapi.org/v2/everything";

    url = url.concat(`?apiKey=${API_KEY.newsapi}`);
    url = url.concat(`&q=${queries.q}`);
    url = url.concat(`&sortBy${queries.sortBy}`);
    url = url.concat(`&pageSize=${queries.pageSize}`);
    url = url.concat(`&page=${queries.page}`);

    const response = await fetch(url, { method: "GET" });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`error`, error);
  }
}
