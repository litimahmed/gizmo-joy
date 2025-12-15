export interface DashboardStat {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    description: string;
    progress: number;
}

export interface RecentActivity {
    id: number;
    action: string;
    queue: string;
    time: string;
    status: 'success' | 'complete' | 'warning' | 'info';
    user: string;
}

export interface QuickAction {
    label: string;
    variant: 'default' | 'secondary' | 'outline';
    description: string;
    icon_type: string;
}

export interface PerformanceMetric {
    label: string;
    value: number;
    status: 'normal' | 'excellent' | 'warning';
}

export interface SystemStatus {
    label: string;
    status: string;
    icon_type: string;
    status_color: string;
}

export interface DashboardOverviewResponse {
    stats: DashboardStat[];
    recent_activity: RecentActivity[];
    quick_actions: QuickAction[];
    performance_metrics: PerformanceMetric[];
    system_status: SystemStatus[];
}
