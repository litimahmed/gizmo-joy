export interface AnalyticsStat {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    description: string;
    icon_type: string;
}

export interface LineChartDataPoint {
    x: string;
    y: number;
}

export interface LineChartSeries {
    id: string;
    data: LineChartDataPoint[];
}

export interface BarChartDataPoint {
    hour: string;
    customers: number;
}

export interface PieChartDataPoint {
    id: string;
    label: string;
    value: number;
}

export interface AnalyticsDataResponse {
    stats: AnalyticsStat[];
    weekly_line_data: LineChartSeries[];
    efficiency_line_data: LineChartSeries[];
    hourly_bar_data: BarChartDataPoint[];
    queue_distribution_pie: PieChartDataPoint[];
    monthly_trend_data: LineChartSeries[];
}
