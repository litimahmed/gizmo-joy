import { useState } from "react";
import { staticPrivacyPolicies } from "@/data/adminStaticContent";
import { PrivacyPolicy, PrivacyPolicyFormData } from "@/types/admin/privacyPolicy";
import { toast } from "@/hooks/use-toast";

export const usePrivacyPolicy = () => {
  const [privacyPolicies, setPrivacyPolicies] = useState<PrivacyPolicy[]>(staticPrivacyPolicies);
  const [isLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const createPrivacyPolicy = async (data: PrivacyPolicyFormData) => {
    setIsCreating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newPolicy: PrivacyPolicy = {
      ...data,
      id: privacyPolicies.length + 1,
      date_creation: new Date().toISOString()
    };
    
    setPrivacyPolicies(prev => [...prev, newPolicy]);
    setIsCreating(false);
    
    toast({
      title: "Succès",
      description: "Politique de confidentialité créée avec succès",
    });
  };

  const updatePrivacyPolicy = async ({ id, data }: { id: number; data: PrivacyPolicyFormData }) => {
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setPrivacyPolicies(prev => prev.map(p => 
      p.id === id ? { ...p, ...data } : p
    ));
    
    setIsUpdating(false);
    
    toast({
      title: "Succès",
      description: "Politique de confidentialité mise à jour avec succès",
    });
  };

  return {
    privacyPolicies,
    isLoading,
    createPrivacyPolicy,
    updatePrivacyPolicy: (id: number, data: PrivacyPolicyFormData) => updatePrivacyPolicy({ id, data }),
    isCreating,
    isUpdating,
  };
};
