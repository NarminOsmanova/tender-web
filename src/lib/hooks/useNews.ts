import { useQuery } from '@tanstack/react-query';
import { News, newsService } from '../services/newsService';

export const useNews = () => {
    return useQuery({
      queryKey: ['news'],
      queryFn: async () => {
        const response = await newsService.getNews();
        return response.responseValue;
      },
    });
  };
  
  export const useNewsPagination = (page: number = 1, pageSize: number = 10) => {
    return useQuery({
      queryKey: ['news', page, pageSize],
      queryFn: async () => {
        const response = await newsService.getNewsPagination(page, pageSize);
        return response.responseValue;
      },
    });
  };
  
  // YENİ: id və ya slug ilə bir xəbəri gətirən hook
  export const useNewsByIdOrSlug = (params: { id?: number; slug?: string }) => {
    return useQuery<News>({
      queryKey: ['news', params],
      queryFn: async () => {
        const response = await newsService.getNewsByIdOrSlug(params);
        return response.responseValue;
      },
      enabled: !!params.id || !!params.slug, // heç olmasa biri olmalıdır
    });
  };
  