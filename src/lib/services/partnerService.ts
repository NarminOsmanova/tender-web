import apiClient from '../axios';
import { Partner } from '@/container/home/type/partner-type';

export type PartnerResponse = Partner[];

export interface ApiResponse<T> {
  responseValue: T;
  statusCode: number;
  message: string;
}

export const partnerService = {
  async getPartners(): Promise<ApiResponse<PartnerResponse>> {
    const response = await apiClient.get('/partners/web/get-all');
    return response.data;
  },

};
