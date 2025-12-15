import { useState } from "react";
import { staticContact } from "@/data/adminStaticContent";
import { ContactPayload, ContactResponse } from "@/types/admin/contact";
import { useToast } from "@/hooks/use-toast";

// Local state to simulate CRUD operations
let localContact: ContactResponse = { ...staticContact };

export const useContacts = () => {
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const createContact = async (payload: ContactPayload) => {
    setIsCreating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    localContact = {
      ...payload,
      id: 1,
      date_creation: new Date().toISOString(),
    };
    
    setIsCreating(false);
    toast({
      title: "Succès",
      description: "Contact créé avec succès",
    });
    
    return localContact;
  };

  const updateContact = async (payload: ContactPayload) => {
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    localContact = {
      ...localContact,
      ...payload,
    };
    
    setIsUpdating(false);
    toast({
      title: "Succès",
      description: "Contact mis à jour avec succès",
    });
    
    return localContact;
  };

  return {
    contact: localContact,
    isLoading: false,
    error: null,
    refetch: () => {},
    createContact,
    updateContact,
    isCreating,
    isUpdating,
  };
};
