import { useQuery } from '@tanstack/react-query';
import { fetchDashboardOverview } from '@/services/admin/dashboardService';

export const useDashboardOverview = () => {
    return useQuery({
        queryKey: ['dashboard-overview'],
        queryFn: fetchDashboardOverview,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
