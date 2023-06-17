import api from "hooks/axios";

export const getAllProducts = async () => {
  try {
    const response = await api.products.list({});

    return response;
  } catch (error) {
    console.log(error);
  }
}