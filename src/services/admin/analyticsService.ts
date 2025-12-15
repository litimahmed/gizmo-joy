import { apiClient } from '@/services/api';
import { AnalyticsDataResponse } from '@/types/admin/analytics';

export const fetchAnalyticsData = async (period: string = '30d'): Promise<AnalyticsDataResponse> => {
    return apiClient.get<AnalyticsDataResponse>('/admin/analytics/', { period });
};
