import { useQuery } from '@tanstack/react-query';
import { partnerService } from '../services/partnerService';

export const usePartners = () => {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      const response = await partnerService.getPartners();
      console.log(response, "response")
      return response.responseValue;
    },
  });
}; 