import { useState } from "react";
import { staticTermsAndConditions } from "@/data/adminStaticContent";
import { TermsAndConditions, TermsAndConditionsFormData } from "@/types/admin/termsAndConditions";
import { toast } from "@/hooks/use-toast";

export const useTermsAndConditions = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<TermsAndConditions[]>(staticTermsAndConditions);
  const [isLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const createTermsAndConditions = async (data: TermsAndConditionsFormData) => {
    setIsCreating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newTerms: TermsAndConditions = {
      ...data,
      id: termsAndConditions.length + 1,
      condition_id: `terms-${String(termsAndConditions.length + 1).padStart(3, '0')}`,
      date_creation: new Date().toISOString()
    };
    
    setTermsAndConditions(prev => [...prev, newTerms]);
    setIsCreating(false);
    
    toast({
      title: "Succès",
      description: "Conditions générales créées avec succès",
    });
  };

  const updateTermsAndConditions = async (conditionId: string, data: TermsAndConditionsFormData) => {
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setTermsAndConditions(prev => prev.map(t => 
      t.condition_id === conditionId ? { ...t, ...data } : t
    ));
    
    setIsUpdating(false);
    
    toast({
      title: "Succès",
      description: "Conditions générales mises à jour avec succès",
    });
  };

  return {
    termsAndConditions,
    isLoading,
    createTermsAndConditions,
    updateTermsAndConditions,
    isCreating,
    isUpdating,
  };
};
