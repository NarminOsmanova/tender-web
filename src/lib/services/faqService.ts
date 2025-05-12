import { Faq } from '@/container/home/type/faq-type';
import apiClient from '../axios';

export type FaqResponse = Faq[];

export interface ApiResponse<T> {
  responseValue: T;
  statusCode: number;
  message: string;
}

export const faqService = {
  async getFaqs(): Promise<ApiResponse<FaqResponse>> {
    const response = await apiClient.get('/Faqs/web/get-all');
    return response.data;
  },

  async getFaqById(id: number): Promise<ApiResponse<Faq>> {
    const response = await apiClient.get('/Faqs/web/get', {
      params: { id }
    });
    return response.data;
  },
};
