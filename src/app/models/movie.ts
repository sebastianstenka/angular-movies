export interface Movie {
  backdrop_path: string;
  title: string;
  id: number;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
