/**
 * useCategories Hook
 * Hardcoded data for admin category management
 */

import { useState } from "react";
import { staticCategories } from "@/data/adminStaticContent";
import { Category } from "@/types/admin/category";
import { useToast } from "@/hooks/use-toast";

// Local state to simulate CRUD operations
let localCategories = [...staticCategories];

export function useCategories() {
    return {
        categories: localCategories,
        count: localCategories.length,
        isLoading: false,
        error: null,
        refetch: () => {},
    };
}

export function useCreateCategory() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (formData: FormData) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 500));

        const newCategory: Category = {
            categorie_id: `${Date.now()}`,
            nom_categorie: formData.get("nom_categorie") as string || "Nouvelle Catégorie",
            description_categorie: formData.get("description_categorie") as string || "",
            couleur_theme: formData.get("couleur_theme") as string || "#3B82F6",
            ordre_affichage: localCategories.length + 1,
            photo_principale_cat: "/placeholder.svg",
            active: true,
            date_creation: new Date().toISOString(),
        };

        localCategories = [newCategory, ...localCategories];
        setIsPending(false);

        toast({
            title: "Succès",
            description: "Catégorie créée avec succès",
        });

        return { message: "Catégorie créée avec succès", data: newCategory };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}

export function useUpdateCategory() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async ({ categoryId, formData }: { categoryId: string | number; formData: FormData }) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 500));

        localCategories = localCategories.map(c => {
            if (String(c.categorie_id) === String(categoryId)) {
                return {
                    ...c,
                    nom_categorie: formData.get("nom_categorie") as string || c.nom_categorie,
                    description_categorie: formData.get("description_categorie") as string || c.description_categorie,
                    couleur_theme: formData.get("couleur_theme") as string || c.couleur_theme,
                };
            }
            return c;
        });

        setIsPending(false);

        toast({
            title: "Succès",
            description: "Catégorie modifiée avec succès",
        });

        return { message: "Catégorie modifiée avec succès" };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}

export function useDeleteCategory() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (categoryId: number) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        localCategories = localCategories.filter(c => String(c.categorie_id) !== String(categoryId));
        setIsPending(false);

        toast({
            title: "Succès",
            description: "Catégorie supprimée avec succès",
        });

        return { message: "Catégorie supprimée avec succès" };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}

export function useSuspendCategory() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (categoryId: number) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        localCategories = localCategories.map(c =>
            String(c.categorie_id) === String(categoryId) ? { ...c, active: false } : c
        );
        setIsPending(false);

        toast({
            title: "Succès",
            description: "Catégorie suspendue avec succès",
        });

        return { message: "Catégorie suspendue avec succès" };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}

export function useResumeCategory() {
    const { toast } = useToast();
    const [isPending, setIsPending] = useState(false);

    const mutateAsync = async (categoryId: number) => {
        setIsPending(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        localCategories = localCategories.map(c =>
            String(c.categorie_id) === String(categoryId) ? { ...c, active: true } : c
        );
        setIsPending(false);

        toast({
            title: "Succès",
            description: "Catégorie activée avec succès",
        });

        return { message: "Catégorie activée avec succès" };
    };

    return { mutateAsync, mutate: mutateAsync, isPending, isLoading: isPending };
}
