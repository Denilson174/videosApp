/* eslint-disable @typescript-eslint/naming-convention */
export interface ISeriesApi {
  poster_path?: string;
  popularity?: number;
  id?: number;
  vote_average?: number;
  overview?: string;
  adult?: boolean;
  release_date?: string;
  genre_ids?: number[];
  original_name?: string;
  original_language?: string;
  title?: string;
  vote_count?: number;
  video?: boolean;
}


export interface IListaSeries {
  page: number;
  results: ISeriesApi[];
  total_results: number;
  total_pages: number;
}
