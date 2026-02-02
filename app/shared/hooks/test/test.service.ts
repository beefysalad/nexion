// test.service.ts
import api from "@/lib/axios";

export const getTestdata = async () => {
  const response = await api.get("/test");
  return response.data;
};

export const testMutationFn = async () => {
  const response = await api.post("/test");
  return response.data;
};
