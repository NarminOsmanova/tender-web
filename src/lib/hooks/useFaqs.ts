import { useQuery } from '@tanstack/react-query';
import { faqService } from '../services/faqService';

export const useFaqs = () => {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      const response = await faqService.getFaqs();
      return response.responseValue;
    },
  });
}; 