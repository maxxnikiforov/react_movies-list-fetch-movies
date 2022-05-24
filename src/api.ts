const API = 'https://www.omdbapi.com/?apikey=6717544a&t=';

export async function getMovie(title: string): Promise<Movie> {
  const response = await fetch(`${API}${title}`);
  const movie = await response.json();

  return movie;
}
