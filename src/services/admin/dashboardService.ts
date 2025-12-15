import { apiClient } from '@/services/api';
import { DashboardOverviewResponse } from '@/types/admin/dashboard';

export const fetchDashboardOverview = async (): Promise<DashboardOverviewResponse> => {
    return apiClient.get<DashboardOverviewResponse>('/admin/dashboard/overview/');
};
