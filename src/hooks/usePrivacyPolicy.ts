import { staticPrivacyPolicyPublic } from '@/data/staticContent';
import { PrivacyPolicyData } from '@/types/privacyPolicy';

export const usePrivacyPolicy = () => {
  return {
    data: staticPrivacyPolicyPublic as PrivacyPolicyData,
    isLoading: false,
    error: null,
    isError: false
  };
};
