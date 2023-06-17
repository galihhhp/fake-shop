import api from "hooks/axios";

export const getAllProducts = async (offset?: number, limit?: number) => {
  try {
    const response = await api.products.list({
      offset: offset,
      limit: limit,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getAllCategories = async () => {
  try {
    const response = await api.products.categories();

    return response;
  } catch (error) {
    console.log(error);
  }
}