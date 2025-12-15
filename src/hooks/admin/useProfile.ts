import { useState } from "react";
import { staticAdminProfile } from "@/data/adminStaticContent";
import { AdminProfile, UpdateProfilePayload } from "@/types/admin/profile";
import { toast } from "sonner";

export const useProfile = () => {
  const [profile, setProfile] = useState<AdminProfile>(staticAdminProfile);
  const [isLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error] = useState<Error | null>(null);

  const refetch = () => {
    setProfile({ ...staticAdminProfile });
  };

  const updateProfile = async (data: UpdateProfilePayload) => {
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setProfile(prev => ({
      ...prev,
      nom: data.nom,
      numero_telephone: data.numero_telephone
    }));
    
    setIsUpdating(false);
    toast.success("Profil mis à jour avec succès");
  };

  return { 
    profile, 
    isLoading, 
    error, 
    refetch,
    updateProfile,
    isUpdating,
  };
};
