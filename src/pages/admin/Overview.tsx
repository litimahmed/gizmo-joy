import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Users,
    Clock,
    TrendingUp,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    UserPlus,
    AlertCircle,
    CheckCircle2,
    Timer,
    BarChart3,
    Zap,
    Shield,
    Globe,
    Server,
    Database,
    Wifi,
    Calendar,
    ChevronRight,
    Sparkles,
    Target,
    LineChart
} from "lucide-react";
import { useDashboardOverview } from "@/hooks/admin/useDashboard";
import { LucideIcon } from "lucide-react";

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, LucideIcon> = {
    Users,
    Clock,
    TrendingUp,
    Activity,
    Target,
    UserPlus,
    AlertCircle,
    CheckCircle2,
    Sparkles,
    BarChart3,
    Zap,
    Shield,
    Globe,
    Server,
    Database,
    Wifi,
};

const getIcon = (iconType: string): LucideIcon => {
    return iconMap[iconType] || Activity;
};

const bgGradients = [
    "from-primary/10 via-primary/5 to-transparent",
    "from-blue-500/10 via-blue-500/5 to-transparent",
    "from-success/10 via-success/5 to-transparent",
    "from-amber-500/10 via-amber-500/5 to-transparent"
];

export default function Overview() {
    const { data, isLoading, error } = useDashboardOverview();

    // Loading skeleton
    if (isLoading) {
        return (
            <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 rounded-2xl border border-border/30 bg-card/50">
                    <div>
                        <Skeleton className="h-10 w-48 mb-2" />
                        <Skeleton className="h-5 w-72" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="border-border/40">
                            <CardHeader className="pb-3">
                                <Skeleton className="h-4 w-24" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-8 w-20 mb-3" />
                                <Skeleton className="h-2 w-full" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground">Failed to load dashboard data</p>
                    <p className="text-sm text-muted-foreground">{error.message}</p>
                </div>
            </div>
        );
    }

    const stats = data?.stats || [];
    const recentActivity = data?.recent_activity || [];
    const quickActions = data?.quick_actions || [];
    const performanceMetrics = data?.performance_metrics || [];
    const systemStatus = data?.system_status || [];

    return (
        <div className="space-y-8 animate-fade-in">
            {/* En-tête de page avec gradient décoratif */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl -z-10" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <LineChart className="h-5 w-5 text-primary" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                                Tableau de Bord
                            </h1>
                        </div>
                        <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                            Surveillez et gérez vos opérations de file d'attente en temps réel
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 border border-border/50">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">
                                {new Date().toLocaleDateString('fr-FR', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grille des statistiques principales */}
            <div data-tour="overview-stats" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {stats.map((stat, index) => {
                    const IconComponent = getIcon(stat.title === "Files Actives" ? "Users" : 
                        stat.title === "Clients Aujourd'hui" ? "Activity" : 
                        stat.title === "Temps d'Attente Moyen" ? "Clock" : "Target");
                    return (
                        <Card
                            key={stat.title}
                            className={`relative overflow-hidden border-border/40 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group animate-scale-in bg-gradient-to-br ${bgGradients[index % 4]}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <IconComponent className="h-5 w-5 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent className="relative">
                                <div className="flex items-end justify-between mb-3">
                                    <div className="text-3xl font-bold text-foreground tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-lg ${
                                        stat.trend === 'up'
                                            ? 'text-success-foreground bg-success/20'
                                            : 'text-destructive bg-destructive/10'
                                    }`}>
                                        {stat.trend === 'up' ? (
                                            <ArrowUpRight className="h-4 w-4" />
                                        ) : (
                                            <ArrowDownRight className="h-4 w-4" />
                                        )}
                                        {stat.change}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground">{stat.description}</span>
                                        <span className="font-medium text-primary">{stat.progress}%</span>
                                    </div>
                                    <Progress value={stat.progress} className="h-1.5" />
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Contenu principal - Grille 3 colonnes */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Colonne gauche - Activité récente (2/3) */}
                <Card data-tour="overview-activity" className="xl:col-span-2 border-border/40 overflow-hidden">
                    <CardHeader className="border-b border-border/30 bg-muted/20 dark:bg-muted/30 px-6 py-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Activity className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-semibold text-foreground">
                                        Activité Récente
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        Dernières actions sur la plateforme
                                    </CardDescription>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1">
                                Voir tout
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-border/30">
                            {recentActivity.map((activity, index) => (
                                <div
                                    key={activity.id}
                                    className="p-5 hover:bg-muted/30 dark:hover:bg-muted/40 transition-all duration-200 cursor-pointer group"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2.5 rounded-xl transition-transform group-hover:scale-110 ${
                                            activity.status === 'success' ? 'bg-success/10 dark:bg-success/20' :
                                            activity.status === 'complete' ? 'bg-primary/10 dark:bg-primary/20' :
                                            activity.status === 'warning' ? 'bg-warning/10 dark:bg-warning/20' :
                                            'bg-accent/10 dark:bg-accent/20'
                                        }`}>
                                            {activity.status === 'success' && <UserPlus className="h-4 w-4 text-success" />}
                                            {activity.status === 'complete' && <CheckCircle2 className="h-4 w-4 text-primary" />}
                                            {activity.status === 'warning' && <AlertCircle className="h-4 w-4 text-warning" />}
                                            {activity.status === 'info' && <Sparkles className="h-4 w-4 text-accent" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                    {activity.action}
                                                </p>
                                                <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5 font-normal">
                                                    {activity.user}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-0.5">
                                                {activity.queue}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Timer className="h-3.5 w-3.5" />
                                            <span className="text-xs font-medium whitespace-nowrap">
                                                {activity.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Colonne droite (1/3) */}
                <div className="space-y-6">

                    {/* Actions Rapides */}
                    <Card className="border-border/40 overflow-hidden">
                        <CardHeader className="border-b border-border/30 bg-muted/20 dark:bg-muted/30 px-6 py-5">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Zap className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-semibold text-foreground">
                                        Actions Rapides
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        Accès direct aux fonctions clés
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 space-y-2">
                            {quickActions.map((action) => {
                                const ActionIcon = getIcon(action.icon_type);
                                return (
                                    <Button
                                        key={action.label}
                                        variant="ghost"
                                        className="w-full justify-start gap-3 h-14 text-sm font-medium bg-muted/30 hover:bg-muted/50 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="h-9 w-9 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <ActionIcon className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-foreground group-hover:text-primary transition-colors">{action.label}</div>
                                            <div className="text-xs font-normal text-muted-foreground">
                                                {action.description}
                                            </div>
                                        </div>
                                    </Button>
                                );
                            })}
                        </CardContent>
                    </Card>

                    {/* État du Système */}
                    <Card className="border-border/40 overflow-hidden">
                        <CardHeader className="border-b border-border/30 bg-muted/20 dark:bg-muted/30 px-6 py-5">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-success/10 flex items-center justify-center">
                                    <Shield className="h-4 w-4 text-success" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-semibold text-foreground">
                                        État du Système
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        Surveillance en temps réel
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 space-y-3">
                            {systemStatus.map((item) => {
                                const StatusIcon = getIcon(item.icon_type);
                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between p-3 rounded-lg bg-muted/30 dark:bg-muted/40 border border-border/30"
                                    >
                                        <div className="flex items-center gap-3">
                                            <StatusIcon className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm font-medium text-foreground">{item.label}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 rounded-full ${item.status_color}`} />
                                            <span className="text-xs text-muted-foreground">{item.status}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>

                    {/* Métriques de Performance */}
                    <Card className="border-border/40 overflow-hidden">
                        <CardHeader className="border-b border-border/30 bg-muted/20 dark:bg-muted/30 px-6 py-5">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Server className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-semibold text-foreground">
                                        Performance
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        Indicateurs clés du système
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 space-y-4">
                            {performanceMetrics.map((metric) => (
                                <div key={metric.label} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">{metric.label}</span>
                                        <span className={`font-medium ${
                                            metric.status === 'excellent' ? 'text-success' :
                                            metric.status === 'normal' ? 'text-primary' :
                                            'text-warning'
                                        }`}>
                                            {metric.value}%
                                        </span>
                                    </div>
                                    <Progress
                                        value={metric.value}
                                        className={`h-2 ${
                                            metric.status === 'excellent' ? '[&>div]:bg-success' :
                                            metric.status === 'normal' ? '' :
                                            '[&>div]:bg-warning'
                                        }`}
                                    />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}