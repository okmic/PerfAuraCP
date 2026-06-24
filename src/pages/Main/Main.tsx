import "./styles.css"
import { 
    Calendar, 
    Target, 
    Clock, 
    TrendingUp, 
    Users, 
    MessageSquare,
    Brain,
    Database,
    Server,
    Shield,
    Zap,
    Layers,
    BarChart3,
    Sparkles,
    Rocket,
    CheckCircle2,
    Grid3x3,
    Workflow,
    GitBranch,
    Terminal,
    Cloud,
    FileText,
    Activity,
    Circle,
    Star
} from 'lucide-react'

export default function MainPage() {
    const budget = 43000
    const hourlyRate = 600

    const stages = [
        { name: "Интерфейс (UI/UX)", hours: 12, description: "Дизайн-система, компоненты, адаптив", icon: Grid3x3 },
        { name: "Роли и доступы", hours: 8, description: "Система прав, авторизация, профили", icon: Users },
        { name: "Бэкенд (API)", hours: 20, description: "REST API, бизнес-логика, микросервисы", icon: Server },
        { name: "База данных", hours: 10, description: "Схема, миграции, оптимизация запросов", icon: Database },
        { name: "Интеграция с AI (Voice to Text)", hours: 16, description: "Распознавание речи, транскрипция", icon: Brain },
        { name: "Алгоритмы анализа текста", hours: 14, description: "NLP, тональность, сущности, инсайты", icon: MessageSquare },
        { name: "Интеграция с Telegram API", hours: 10, description: "Webhook, обработка сообщений, бот", icon: Workflow },
        { name: "Настройка инфраструктуры", hours: 8, description: "Docker, CI/CD, мониторинг", icon: Cloud },
        { name: "Посадка и деплой", hours: 4, description: "Хостинг, SSL, домен, релиз", icon: Rocket },
        { name: "Тестирование и отладка", hours: 10, description: "Unit, интеграционные, E2E тесты", icon: Terminal },
        { name: "Документация и обучение", hours: 6, description: "API docs, инструкции, демо", icon: FileText },
    ]

    const totalCalculated = stages.reduce((sum, s) => sum + s.hours, 0)
    const totalCost = totalCalculated * hourlyRate

    return (
        <div className="min-h-screen bg-[#0A0A0F] font-ui overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00F5FF]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF00FF]/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00FF9D]/3 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <header className="relative border-b border-[#1E40AF]/10 bg-[#0A0A0F]/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#00F5FF] to-[#00FF9D] rounded-xl flex items-center justify-center">
                                <Brain className="w-5 h-5 text-[#0A0A0F]" />
                            </div>
                            <div>
                                <span className="text-[#E0F2FE] font-bold text-lg tracking-tight">Perfaura</span>
                                <span className="ml-2 text-[#E0F2FE]/40 text-xs font-mono">× ConvertMe</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2 bg-[#00F5FF]/10 px-3 py-1.5 rounded-lg border border-[#00F5FF]/20">
                                <Activity className="w-4 h-4 text-[#00F5FF]" />
                                <span className="text-[#00F5FF] text-xs font-mono font-semibold">LIVE</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1A1A2E] px-3 py-1.5 rounded-lg border border-[#1E40AF]/20">
                                <Calendar className="w-4 h-4 text-[#00F5FF]" />
                                <span className="text-[#E0F2FE] text-sm font-medium">Старт: 1 июля</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-[#00F5FF]/10 px-4 py-2 rounded-full border border-[#00F5FF]/20">
                                <Sparkles className="w-4 h-4 text-[#00F5FF]" />
                                <span className="text-[#00F5FF] text-xs font-mono font-semibold tracking-wider">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</span>
                            </div>
                            
                            <div className="space-y-3">
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                                    <span className="text-[#E0F2FE]">AI-платформа</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-[#00F5FF] via-[#00FF9D] to-[#FF00FF] bg-clip-text text-transparent">
                                        Perfaura
                                    </span>
                                </h1>
                                <p className="text-lg sm:text-xl text-[#E0F2FE]/60 max-w-2xl font-light leading-relaxed">
                                    Превращаем хаос клиентских коммуникаций в структурированные инсайты 
                                    для повышения качества сервиса
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <div className="flex items-center gap-3 bg-[#12121A] px-4 py-2.5 rounded-xl border border-[#1E40AF]/15">
                                    <Calendar className="w-5 h-5 text-[#00F5FF]" />
                                    <div>
                                        <p className="text-[#E0F2FE]/40 text-xs">Старт</p>
                                        <p className="text-[#E0F2FE] font-semibold text-sm">1 июля 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-[#12121A] px-4 py-2.5 rounded-xl border border-[#1E40AF]/15">
                                    <Target className="w-5 h-5 text-[#00FF9D]" />
                                    <div>
                                        <p className="text-[#E0F2FE]/40 text-xs">Дедлайн</p>
                                        <p className="text-[#E0F2FE] font-semibold text-sm">1 сентября 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-[#12121A] px-4 py-2.5 rounded-xl border border-[#1E40AF]/15">
                                    <Clock className="w-5 h-5 text-[#FF00FF]" />
                                    <div>
                                        <p className="text-[#E0F2FE]/40 text-xs">Срок</p>
                                        <p className="text-[#E0F2FE] font-semibold text-sm">~8 недель</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-md bg-gradient-to-br from-[#00F5FF]/10 via-[#12121A] to-[#FF00FF]/10 p-8 rounded-3xl border border-[#00F5FF]/20 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5FF]/10 rounded-full blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF00FF]/10 rounded-full blur-2xl" />
                                
                                <div className="relative text-center space-y-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                                        <span className="text-[#E0F2FE]/40 text-sm font-mono">БЮДЖЕТ ПРОЕКТА</span>
                                    </div>
                                    <p className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#00FF9D] bg-clip-text text-transparent font-mono">
                                        {budget.toLocaleString()} ₽
                                    </p>
                                    <div className="flex justify-center gap-6 text-sm">
                                        <div>
                                            <p className="text-[#E0F2FE]/40">Часов</p>
                                            <p className="text-[#E0F2FE] font-mono font-semibold">{totalCalculated}</p>
                                        </div>
                                        <div className="w-px bg-[#1E40AF]/20" />
                                        <div>
                                            <p className="text-[#E0F2FE]/40">Ставка</p>
                                            <p className="text-[#E0F2FE] font-mono font-semibold">{hourlyRate} ₽</p>
                                        </div>
                                    </div>
                                    <div className="h-1 bg-[#1E40AF]/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#00F5FF] to-[#00FF9D] rounded-full animate-progress" />
                                    </div>
                                    <p className="text-[#E0F2FE]/30 text-xs font-mono">Фиксированная стоимость</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative -mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { label: "Компонентов", value: "120+", icon: Layers, color: "from-[#00F5FF] to-[#00F5FF]/40" },
                            { label: "Экранов", value: "7", icon: Grid3x3, color: "from-[#00FF9D] to-[#00FF9D]/40" },
                            { label: "API эндпоинтов", value: "30+", icon: GitBranch, color: "from-[#FF00FF] to-[#FF00FF]/40" },
                            { label: "Микросервисов", value: "4", icon: Server, color: "from-[#E0F2FE] to-[#E0F2FE]/40" },
                            { label: "Интеграций", value: "3", icon: Workflow, color: "from-[#F59E0B] to-[#F59E0B]/40" },
                        ].map((stat, i) => {
                            const Icon = stat.icon
                            return (
                                <div key={i} className="group bg-[#12121A] p-4 rounded-2xl border border-[#1E40AF]/10 hover:border-[#00F5FF]/20 transition-all duration-300 hover:translate-y-[-2px]">
                                    <Icon className="w-5 h-5 text-[#00F5FF]/50 group-hover:text-[#00F5FF] transition-colors" />
                                    <p className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mt-2`}>
                                        {stat.value}
                                    </p>
                                    <p className="text-[#E0F2FE]/40 text-sm">{stat.label}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-[#12121A] rounded-3xl border border-[#1E40AF]/10 p-8 sm:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5FF]/5 rounded-full blur-2xl" />
                        
                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 bg-[#00F5FF]/10 px-3 py-1.5 rounded-full border border-[#00F5FF]/20">
                                    <Sparkles className="w-4 h-4 text-[#00F5FF]" />
                                    <span className="text-[#00F5FF] text-xs font-mono font-semibold">О ПРОЕКТЕ</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#E0F2FE]">
                                    Perfaura для <span className="text-[#00F5FF]">ConvertMe</span>
                                </h2>
                                <p className="text-[#E0F2FE]/60 leading-relaxed">
                                    Perfaura — это AI-платформа, разработанная специально для ConvertMe, 
                                    которая анализирует клиентские коммуникации, выявляет паттерны поведения 
                                    и предоставляет готовые инсайты для повышения качества сервиса.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 bg-[#1A1A2E] px-3 py-1.5 rounded-lg border border-[#1E40AF]/10">
                                        <CheckCircle2 className="w-4 h-4 text-[#00FF9D]" />
                                        <span className="text-[#E0F2FE]/60 text-sm">Автоматический анализ диалогов</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#1A1A2E] px-3 py-1.5 rounded-lg border border-[#1E40AF]/10">
                                        <CheckCircle2 className="w-4 h-4 text-[#00FF9D]" />
                                        <span className="text-[#E0F2FE]/60 text-sm">Интеграция с Telegram</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#1A1A2E] px-3 py-1.5 rounded-lg border border-[#1E40AF]/10">
                                        <CheckCircle2 className="w-4 h-4 text-[#00FF9D]" />
                                        <span className="text-[#E0F2FE]/60 text-sm">Voice to Text транскрипция</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#1A1A2E] p-4 rounded-xl border border-[#1E40AF]/10 text-center">
                                    <Brain className="w-8 h-8 text-[#00F5FF] mx-auto" />
                                    <p className="text-2xl font-bold text-[#E0F2FE] mt-2">AI</p>
                                    <p className="text-[#E0F2FE]/40 text-sm">Обработка данных</p>
                                </div>
                                <div className="bg-[#1A1A2E] p-4 rounded-xl border border-[#1E40AF]/10 text-center">
                                    <BarChart3 className="w-8 h-8 text-[#00FF9D] mx-auto" />
                                    <p className="text-2xl font-bold text-[#E0F2FE] mt-2">Insights</p>
                                    <p className="text-[#E0F2FE]/40 text-sm">Готовые инсайты</p>
                                </div>
                                <div className="bg-[#1A1A2E] p-4 rounded-xl border border-[#1E40AF]/10 text-center">
                                    <Shield className="w-8 h-8 text-[#FF00FF] mx-auto" />
                                    <p className="text-2xl font-bold text-[#E0F2FE] mt-2">Secure</p>
                                    <p className="text-[#E0F2FE]/40 text-sm">Безопасность</p>
                                </div>
                                <div className="bg-[#1A1A2E] p-4 rounded-xl border border-[#1E40AF]/10 text-center">
                                    <Zap className="w-8 h-8 text-[#F59E0B] mx-auto" />
                                    <p className="text-2xl font-bold text-[#E0F2FE] mt-2">Fast</p>
                                    <p className="text-[#E0F2FE]/40 text-sm">Мгновенный анализ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-[#00F5FF]/10 px-3 py-1.5 rounded-full border border-[#00F5FF]/20 mb-3">
                                <Layers className="w-4 h-4 text-[#00F5FF]" />
                                <span className="text-[#00F5FF] text-xs font-mono font-semibold">ЭТАПЫ РАЗРАБОТКИ</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#E0F2FE]">Дорожная карта проекта</h2>
                            <p className="text-[#E0F2FE]/40 mt-1">Детализация по часам и стоимости</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm bg-[#12121A] px-4 py-2 rounded-xl border border-[#1E40AF]/10">
                            <span className="text-[#E0F2FE]/40">Часы</span>
                            <span className="w-px h-4 bg-[#1E40AF]/20" />
                            <span className="text-[#E0F2FE]/40">Стоимость</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {stages.map((stage, index) => {
                            const percent = Math.round((stage.hours / totalCalculated) * 100)
                            const Icon = stage.icon
                            return (
                                <div key={index} className="group relative bg-[#12121A] rounded-xl border border-[#1E40AF]/10 hover:border-[#00F5FF]/20 transition-all duration-300 hover:translate-x-1">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/0 via-[#00F5FF]/0 to-[#00F5FF]/0 group-hover:from-[#00F5FF]/5 group-hover:via-[#00F5FF]/5 group-hover:to-transparent rounded-xl transition-all duration-500" />
                                    <div className="relative p-4 sm:p-5">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                            <div className="flex items-center gap-3 sm:w-56 lg:w-72 flex-shrink-0">
                                                <div className="w-8 h-8 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00F5FF]/20 transition-colors">
                                                    <Icon className="w-4 h-4 text-[#00F5FF]" />
                                                </div>
                                                <span className="text-xs font-mono text-[#00F5FF]/50 bg-[#00F5FF]/5 px-2 py-0.5 rounded flex-shrink-0">
                                                    #{String(index + 1).padStart(2, '0')}
                                                </span>
                                                <span className="text-sm sm:text-base font-semibold text-[#E0F2FE] truncate">{stage.name}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-1 h-1.5 bg-[#1E40AF]/10 rounded-full overflow-hidden">
                                                        <div className="h-full bg-gradient-to-r from-[#00F5FF] to-[#00FF9D] rounded-full transition-all duration-1000" style={{ width: `${percent}%` }} />
                                                    </div>
                                                    <span className="text-xs font-mono text-[#E0F2FE]/40 w-12 text-right flex-shrink-0">{percent}%</span>
                                                </div>
                                                <p className="text-xs text-[#E0F2FE]/30 mt-1 truncate">{stage.description}</p>
                                            </div>
                                            <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                                                <span className="text-sm font-mono text-[#E0F2FE]/60 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {stage.hours} ч
                                                </span>
                                                <span className="text-sm font-mono text-[#00FF9D] font-semibold">
                                                    {(stage.hours * hourlyRate).toLocaleString()} ₽
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="relative bg-gradient-to-br from-[#00F5FF]/10 via-[#12121A] to-[#FF00FF]/10 rounded-3xl border border-[#00F5FF]/20 p-6 sm:p-8 lg:p-10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5FF]/5 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF00FF]/5 rounded-full blur-2xl" />
                        
                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2 bg-[#12121A]/50 p-6 rounded-2xl border border-[#1E40AF]/10">
                                <p className="text-[#E0F2FE]/40 text-sm font-mono flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    ОБЩЕЕ ВРЕМЯ
                                </p>
                                <p className="text-3xl font-mono font-bold text-[#E0F2FE]">{totalCalculated} ч</p>
                                <p className="text-[#E0F2FE]/30 text-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]" />
                                    + {Math.round(totalCalculated * 0.1)} ч резерв
                                </p>
                            </div>
                            <div className="space-y-2 bg-[#12121A]/50 p-6 rounded-2xl border border-[#1E40AF]/10">
                                <p className="text-[#E0F2FE]/40 text-sm font-mono flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    СТАВКА
                                </p>
                                <p className="text-3xl font-mono font-bold text-[#E0F2FE]">{hourlyRate} ₽</p>
                                <p className="text-[#E0F2FE]/30 text-sm">за час работы</p>
                            </div>
                            <div className="space-y-2 bg-[#12121A]/50 p-6 rounded-2xl border border-[#00F5FF]/20 md:text-right">
                                <p className="text-[#E0F2FE]/40 text-sm font-mono flex items-center md:justify-end gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    ИТОГО
                                </p>
                                <p className="text-4xl sm:text-5xl font-mono font-bold bg-gradient-to-r from-[#00F5FF] to-[#00FF9D] bg-clip-text text-transparent">
                                    {totalCost.toLocaleString()} ₽
                                </p>
                                <p className="text-[#E0F2FE]/30 text-sm">фиксированная стоимость</p>
                            </div>
                        </div>

                        <div className="relative mt-6 pt-6 border-t border-[#1E40AF]/20">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <Circle className="w-3 h-3 text-[#00F5FF] fill-[#00F5FF] animate-pulse" />
                                        <span className="text-[#00F5FF] text-sm font-mono font-semibold">ГОТОВНОСТЬ К СТАРТУ</span>
                                    </div>
                                    <span className="text-[#E0F2FE]/60 text-sm flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        1 июля 2026
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[#E0F2FE]/60 text-sm flex items-center gap-1">
                                        <Target className="w-4 h-4" />
                                        Дедлайн
                                    </span>
                                    <span className="text-[#FF00FF] font-mono font-semibold flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        1 сентября 2026
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-[#1E40AF]/10 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Brain className="w-5 h-5 text-[#00F5FF]" />
                            <span className="text-[#E0F2FE]/40 text-sm">Perfaura × ConvertMe</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}