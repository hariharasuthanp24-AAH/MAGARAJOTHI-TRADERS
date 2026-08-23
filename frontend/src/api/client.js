import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProductsApi = async (category = 'All', featured = false, search = '') => {
  try {
    const params = {};
    if (category && category !== 'All' && category !== 'All Range') {
      params.category = category;
    }
    if (featured) params.featured = 'true';
    if (search) params.search = search;

    const response = await apiClient.get('/products', { params });
    const productArray = Array.isArray(response.data)
      ? response.data
      : (response.data?.data || []);

    return productArray;
  } catch (error) {
    console.error('API Error fetchProducts:', error);
    return [];
  }
};

export const fetchProductBySlugApi = async (slug) => {
  try {
    const response = await apiClient.get(`/products/${slug}`);
    return response.data?.data || response.data;
  } catch (error) {
    console.error('API Error fetchProductBySlug:', error);
    throw error;
  }
};

export const submitInquiryApi = async (inquiryData) => {
  try {
    const response = await apiClient.post('/inquiries', inquiryData);
    return response.data;
  } catch (error) {
    console.error('API Error submitInquiry:', error);
    throw error;
  }
};

export const fetchInquiriesApi = async () => {
  try {
    const response = await apiClient.get('/inquiries');
    return response.data?.data || response.data;
  } catch (error) {
    console.error('API Error fetchInquiries:', error);
    throw error;
  }
};

export const fetchTestimonialsApi = async () => {
  try {
    const response = await apiClient.get('/testimonials');
    const testimonialsArray = Array.isArray(response.data)
      ? response.data
      : (response.data?.data || []);
    return testimonialsArray;
  } catch (error) {
    console.error('API Error fetchTestimonials:', error);
    return [];
  }
};

export const submitTestimonialApi = async (testimonialData) => {
  try {
    const response = await apiClient.post('/testimonials', testimonialData);
    return response.data;
  } catch (error) {
    console.error('API Error submitTestimonial:', error);
    throw error;
  }
};
