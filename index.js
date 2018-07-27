const BASE_SEARCH_URL = 'https://api.github.com/search/repositories';

function searchGithubRepos(searchTerm) {
  const query = {
    q: searchTerm,
    per_page: 5
  };

  $.getJSON(BASE_SEARCH_URL, query, response => console.log(response));
}



searchGithubRepos('batman');


