import api from "hooks/axios";

export const getCarts = async () => {
  try {
    const response = await api.products.cart();

    return response;
  } catch (error) {
    console.log(error);
  }
}