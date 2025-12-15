/**
 * Services Hooks
 * Hardcoded data for admin services management
 */

import { useState, useCallback } from "react";
import { staticServices } from "@/data/adminStaticContent";
import { Service } from "@/types/admin/service";
import { useToast } from "@/hooks/admin/use-toast";

// Local state to simulate CRUD operations
let localServices = [...staticServices];

/**
 * Hook for fetching all services for a professional
 */
export function useServices(proffessionnelId: string) {
    const filteredServices = proffessionnelId 
        ? localServices.filter(s => s.proffessionnel_id === proffessionnelId)
        : localServices;

    return {
        services: filteredServices,
        count: filteredServices.length,
        isLoading: false,
        error: null,
        refetch: () => {},
    };
}

/**
 * Hook for fetching all services (no filter)
 */
export function useAllServices() {
    return {
        services: localServices,
        count: localServices.length,
        isLoading: false,
        error: null,
        refetch: () => {},
    };
}

/**
 * Hook for fetching a single service by ID
 */
export function useService(serviceId: string) {
    const service = localServices.find(s => s.service_id === serviceId);

    return {
        service,
        isLoading: false,
        error: null,
    };
}

/**
 * Hook for creating a new service
 */
export function useCreateService() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (formData: FormData) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 500));

        const newService: Service = {
            service_id: `serv-${Date.now()}`,
            nom_service: formData.get("nom_service") as string || "Nouveau Service",
            description_service: formData.get("description_service") as string || "",
            prix_service: Number(formData.get("prix_service")) || 0,
            duree_moyenne: Number(formData.get("duree_moyenne")) || 60,
            actif: true,
            date_creation: new Date().toISOString(),
            photo_principale: "/placeholder.svg",
            options: formData.get("options") as string || "",
            jours_de_travail: formData.get("jours_de_travail") as string || "",
            jours_de_repos: formData.get("jours_de_repos") as string || "",
            jours_de_conge: "",
            categorie: formData.get("categorie") as string || "",
            proffessionnel_id: formData.get("proffessionnel_id") as string || "",
        };

        localServices = [newService, ...localServices];
        setIsPending(false);

        toast({
            title: "Succès",
            description: "Service créé avec succès",
        });

        return { message: "Service créé avec succès", data: newService };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}

/**
 * Hook for updating a service
 */
export function useUpdateService() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async ({ serviceId, formData }: { serviceId: string; formData: FormData }) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 500));

        localServices = localServices.map(s => {
            if (s.service_id === serviceId) {
                return {
                    ...s,
                    nom_service: formData.get("nom_service") as string || s.nom_service,
                    description_service: formData.get("description_service") as string || s.description_service,
                    prix_service: Number(formData.get("prix_service")) || s.prix_service,
                    duree_moyenne: Number(formData.get("duree_moyenne")) || s.duree_moyenne,
                };
            }
            return s;
        });

        setIsPending(false);

        toast({
            title: "Succès",
            description: "Service modifié avec succès",
        });

        return { message: "Service modifié avec succès" };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}

/**
 * Hook for deleting a service
 */
export function useDeleteService() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (serviceId: string) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        localServices = localServices.filter(s => s.service_id !== serviceId);
        setIsPending(false);

        toast({
            title: "Succès",
            description: "Service supprimé avec succès",
        });

        return { message: "Service supprimé avec succès" };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}

/**
 * Hook for suspending a service
 */
export function useSuspendService() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (serviceId: string) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        localServices = localServices.map(s =>
            s.service_id === serviceId ? { ...s, actif: false } : s
        );
        setIsPending(false);

        toast({
            title: "Succès",
            description: "Service suspendu avec succès",
        });

        return { message: "Service suspendu avec succès" };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}
