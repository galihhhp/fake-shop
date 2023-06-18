import api from "hooks/axios";

export const getAllProducts = async (limit?: number) => {
  try {
    const response = await api.products.list({
      limit: limit,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getSingleProduct = async (id: string | undefined) => {
  try {
    const response = await api.products.single(id);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getProductByCategory = async (category: string | undefined, limit?: number) => {
  try {
    const response = await api.products.category(category, limit);

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