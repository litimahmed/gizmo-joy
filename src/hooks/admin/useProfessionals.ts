import { useState, useCallback } from "react";
import { staticProfessionals } from "@/data/adminStaticContent";
import { Professional, ProfessionalCreatePayload, ProfessionalUpdatePayload } from "@/types/admin/professional";
import { useToast } from "@/hooks/use-toast";

// Local state to simulate CRUD operations
let localProfessionals = [...staticProfessionals];

export const useProfessionals = () => {
    return {
        professionals: localProfessionals,
        count: localProfessionals.length,
        isLoading: false,
        error: null,
        refetch: () => {}
    };
};

export const useProfessional = (id: string) => {
    const professional = localProfessionals.find(p => p.professionnel_id === id);
    
    return {
        professional,
        isLoading: false,
        error: null
    };
};

export const useCreateProfessional = () => {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (payload: ProfessionalCreatePayload) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const newProfessional: Professional = {
            ...payload,
            professionnel_id: `prof-${Date.now()}`,
            date_creation: new Date().toISOString(),
            actif: true
        };
        
        localProfessionals = [newProfessional, ...localProfessionals];
        setIsPending(false);
        
        toast({
            title: "Succès",
            description: "Professionnel créé avec succès",
        });
        
        return { data: newProfessional };
    };

    return {
        mutateAsync,
        mutate: mutateAsync,
        isPending,
        isLoading: isPending
    };
};

export const useUpdateProfessional = () => {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async ({ id, payload }: { id: string; payload: ProfessionalUpdatePayload }) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        localProfessionals = localProfessionals.map(p => 
            p.professionnel_id === id ? { ...p, ...payload } : p
        );
        setIsPending(false);
        
        toast({
            title: "Succès",
            description: "Professionnel modifié avec succès",
        });
        
        return { data: localProfessionals.find(p => p.professionnel_id === id) };
    };

    return {
        mutateAsync,
        mutate: mutateAsync,
        isPending,
        isLoading: isPending
    };
};

export const useActivateProfessional = () => {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (id: string) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        
        localProfessionals = localProfessionals.map(p => 
            p.professionnel_id === id ? { ...p, actif: true } : p
        );
        setIsPending(false);
        
        toast({
            title: "Succès",
            description: "Professionnel activé avec succès",
        });
    };

    return { mutateAsync, mutate: mutateAsync, isPending };
};

export const useDeactivateProfessional = () => {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (id: string) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        
        localProfessionals = localProfessionals.map(p => 
            p.professionnel_id === id ? { ...p, actif: false } : p
        );
        setIsPending(false);
        
        toast({
            title: "Succès",
            description: "Professionnel désactivé avec succès",
        });
    };

    return { mutateAsync, mutate: mutateAsync, isPending };
};

export const useDeleteProfessional = () => {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (id: string) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        
        localProfessionals = localProfessionals.filter(p => p.professionnel_id !== id);
        setIsPending(false);
        
        toast({
            title: "Succès",
            description: "Professionnel supprimé avec succès",
        });
    };

    return { mutateAsync, mutate: mutateAsync, isPending };
};
