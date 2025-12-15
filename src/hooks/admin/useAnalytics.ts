import { useQuery } from '@tanstack/react-query';
import { fetchAnalyticsData } from '@/services/admin/analyticsService';

export const useAnalyticsData = (period: string = '30d') => {
    return useQuery({
        queryKey: ['analytics-data', period],
        queryFn: () => fetchAnalyticsData(period),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
