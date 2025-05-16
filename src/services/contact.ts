import apiClient from "@/lib/axios";

export interface ContactFormData {
  companyName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

export const createContact = async (data: ContactFormData) => {
  const response = await apiClient.post("/Contancts/web/create", data);
  return response.data;
}; 