import fetch from 'cross-fetch';

async function fetchRepos(username) {
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

export default fetchRepos;
