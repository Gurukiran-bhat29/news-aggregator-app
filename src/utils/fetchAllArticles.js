import { NEWS_API, NEWS_API_KEY, GAURDIAN_API_KEY, GAURDIAN_CATEGORY_API, NEWS_CATEGORY_API } from "../utils/constants";

export const fetchGuardianAPI = async (query, label, date) => {
  const filterDate = date ? `&from-date=${date}` : '';
  const term = label === 'category' ? 'sections?q=' : 'search?q=';
  const response = await fetch(GAURDIAN_CATEGORY_API + term + query + GAURDIAN_API_KEY + filterDate);
  const jsonRes = await response.json()
  return jsonRes.response.results;
};

export const fetchNewsAPI = async (query, label, date) => {
  const filterDate = date ? `from=${date}&to=${date}&` : '';
  const term =
    label === 'category'
      ? '&category='
      : label === 'source'
        ? '&sources='
        : '&q=';
        
  const url = label === 'category' || 'source' ? NEWS_CATEGORY_API : NEWS_API;
  const data = await fetch(url + filterDate + NEWS_API_KEY + term + query)
  const jsonData = await data.json();
  return jsonData.articles;
}

export const fetchAllArticles = async (query, label, filteredDate) => {
  const [guardianApiArticles, newsApiArticles] = await Promise.all([fetchGuardianAPI(query, label, filteredDate), fetchNewsAPI(query, label, filteredDate)]);
  return [...guardianApiArticles, ...newsApiArticles];
};