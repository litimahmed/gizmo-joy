import { staticContactPublic } from '@/data/staticContent';
import { ContactData } from '@/types/contact';

export const useContactInfo = () => {
  return {
    data: staticContactPublic as ContactData,
    isLoading: false,
    error: null,
    isError: false
  };
};
