import { useState } from "react";
import { staticAdminPartners } from "@/data/adminStaticContent";
import { PartnerPayload, PartnerResponse } from "@/types/admin/partner";
import { useToast } from "@/hooks/use-toast";

// Local state to simulate CRUD operations
let localPartners = [...staticAdminPartners];

export const usePartners = () => {
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const getPartner = async (partnerId: number): Promise<PartnerResponse | undefined> => {
    return localPartners.find(p => p.id === partnerId);
  };

  const createPartner = async (payload: PartnerPayload) => {
    setIsCreating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newPartner: PartnerResponse = {
      ...payload,
      id: Date.now(),
      date_ajout: new Date().toISOString(),
    };
    
    localPartners = [newPartner, ...localPartners];
    setIsCreating(false);
    
    toast({
      title: "Succès",
      description: "Partenaire créé avec succès",
    });
    
    return newPartner;
  };

  const updatePartner = async (partnerId: number, payload: PartnerPayload) => {
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    localPartners = localPartners.map(p =>
      p.id === partnerId ? { ...p, ...payload } : p
    );
    
    setIsUpdating(false);
    
    toast({
      title: "Succès",
      description: "Partenaire mis à jour avec succès",
    });
    
    return localPartners.find(p => p.id === partnerId);
  };

  const deletePartner = async (partnerId: number) => {
    setIsDeleting(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    localPartners = localPartners.filter(p => p.id !== partnerId);
    
    setIsDeleting(false);
    
    toast({
      title: "Succès",
      description: "Partenaire supprimé avec succès",
    });
  };

  return {
    partners: localPartners,
    isLoading: false,
    error: null,
    refetch: () => {},
    getPartner,
    createPartner,
    updatePartner,
    deletePartner,
    isCreating,
    isUpdating,
    isDeleting,
  };
};
