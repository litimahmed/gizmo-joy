import { staticTermsOfServicePublic } from '@/data/staticContent';
import { TermsOfServiceData } from '@/types/termsOfService';

export const useTermsOfService = () => {
  return {
    data: staticTermsOfServicePublic as TermsOfServiceData,
    isLoading: false,
    error: null,
    isError: false
  };
};
