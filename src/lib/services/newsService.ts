import apiClient from '../axios';
// News tipini öz modelinizə uyğun düzəldin
export interface NewsSet {
  id: number;
  title: string;
  description: string;
  language: string;
}

export interface NewsImage {
  id?: number; // get-all-da yox, get-by-id-də var
  imageUrl?: string; // get-by-id-də var
  // get-all-da sadəcə string kimi gəlir
}

export interface News {
  id: number;
  coverImage: string;
  slug: string;
  count: number;
  newsSets: NewsSet;
  images: NewsImage[];
  createdDate: string;
}

export type NewsResponse = News[];

export interface NewsPaginationResponse {
  items: News[];
  pageNumber: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ApiResponse<T> {
  responseValue: T;
  statusCode: number;
  message: string;
}

export const newsService = {
  async getNews(): Promise<ApiResponse<News[]>> {
    const response = await apiClient.get('/News/get-all');
    return response.data;
  },
  async getNewsPagination(page: number = 1, pageSize: number = 10): Promise<ApiResponse<NewsPaginationResponse>> {
    const response = await apiClient.get('/News/get-all-with-pagination', {
      params: { pageNumber: page, pageSize: pageSize }
    });
    return response.data;
  },

  async getNewsByIdOrSlug(params: { id?: number; slug?: string }): Promise<ApiResponse<News>> {
    const response = await apiClient.get('/News/get-by-id', {
      params
    });
    return response.data;
  },
};
