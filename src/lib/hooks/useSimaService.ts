import { useState } from 'react';
import { generateQrImage, GenerateQrImageRequest, GenerateQrImageResponse } from '../services/simaService';

export function useSimaQr() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);

  const getQrCode = async (data: GenerateQrImageRequest) => {
    setLoading(true);
    setError(null);
    try {
      const res: GenerateQrImageResponse = await generateQrImage(data);
      setQrCode(res.qrCodeImage);
    } catch (err: any) {
      setError(err.message || 'Xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, qrCode, getQrCode };
}
