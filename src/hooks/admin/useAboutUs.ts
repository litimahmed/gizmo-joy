import { useState } from "react";
import { staticAboutUs } from "@/data/adminStaticContent";
import { AboutNousPayload, AboutNousResponse } from "@/types/admin/aboutUs";
import { useToast } from "@/hooks/use-toast";

export const useAboutUs = () => {
  const { toast } = useToast();
  const [versions, setVersions] = useState<AboutNousResponse[]>(staticAboutUs);
  const [isLoadingVersions] = useState(false);
  const [isLoadingActive] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const activeVersion = versions.find(v => v.active) || versions[0];

  const refetchVersions = () => {
    setVersions([...staticAboutUs]);
  };

  const useAboutUsById = (aboutId: string | undefined) => {
    const data = versions.find(v => v.about_id === aboutId);
    return {
      data,
      isLoading: false,
      error: null
    };
  };

  const createAboutNous = async (payload: AboutNousPayload) => {
    setIsCreating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newVersion: AboutNousResponse = {
      ...payload,
      id: versions.length + 1,
      about_id: `about-${String(versions.length + 1).padStart(3, '0')}`,
      version: versions.length + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    setVersions(prev => [...prev, newVersion]);
    setIsCreating(false);
    
    toast({
      title: "Succès",
      description: "Contenu 'À propos' créé avec succès",
    });
    
    return newVersion;
  };

  const updateAboutUs = async (aboutId: string, payload: AboutNousPayload) => {
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setVersions(prev => prev.map(v => 
      v.about_id === aboutId 
        ? { ...v, ...payload, updated_at: new Date().toISOString() }
        : v
    ));
    
    setIsUpdating(false);
    
    toast({
      title: "Succès",
      description: "Contenu 'À propos' mis à jour avec succès",
    });
  };

  const toggleActive = async (aboutId: string) => {
    setIsToggling(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setVersions(prev => prev.map(v => ({
      ...v,
      active: v.about_id === aboutId
    })));
    
    setIsToggling(false);
    
    toast({
      title: "Succès",
      description: "Version activée avec succès",
    });
  };

  return {
    versions,
    activeVersion,
    isLoadingVersions,
    isLoadingActive,
    refetchVersions,
    useAboutUsById,
    createAboutNous,
    updateAboutUs,
    toggleActive,
    isCreating,
    isUpdating,
    isToggling,
  };
};
