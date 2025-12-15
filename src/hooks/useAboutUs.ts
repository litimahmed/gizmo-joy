import { staticAboutUsPublic } from '@/data/staticContent';
import { AboutUsData } from '@/types/aboutUs';

export const useAboutUs = () => {
  return {
    data: staticAboutUsPublic as AboutUsData,
    isLoading: false,
    error: null,
    isError: false
  };
};
