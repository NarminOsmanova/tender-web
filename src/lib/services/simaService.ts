import axios from 'axios';
import apiClient from '../axios';

export interface GenerateQrImageRequest {
  clientId?: string;
  clientName?: string;
  callbackUrl?: string;
  redirectUrl: string;
  voenFilter?: string;
}

export interface GenerateQrImageResponse {
  qrCodeImage: string; // base64 və ya url
  // Əlavə field-lar varsa əlavə et
}

export async function generateQrImage(data: GenerateQrImageRequest): Promise<GenerateQrImageResponse> {
  const response = await apiClient.post('/SimaIntegration/web/generate-qr-image', data);
  return response.data;
}
