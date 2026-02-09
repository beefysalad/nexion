// test.service.ts
import api from "@/lib/axios";

interface testResponse {
  id: number;
  key: string;
  modifiedAt: string;
  message: string;
  value: number;
}
export const getTestdata = async (): Promise<testResponse> => {
  const response = await api.get("/test");
  return response.data;
};

export const testMutationFn = async () => {
  const response = await api.post("/test");
  return response.data;
};
