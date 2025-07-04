import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const AdminPanel = () => {
  // Mock data for the admin panel
  const totalBalance = 847523.45;
  const totalUsers = 12847;
  const activeWallets = 8924;
  const pendingTransactions = 156;

  const recentTransactions = [
    {
      id: 1,
      type: "BTC",
      amount: 0.5432,
      value: 21650.0,
      status: "completed",
      user: "user_1234",
    },
    {
      id: 2,
      type: "ETH",
      amount: 2.1876,
      value: 5468.9,
      status: "pending",
      user: "user_5678",
    },
    {
      id: 3,
      type: "USDT",
      amount: 1000.0,
      value: 1000.0,
      status: "completed",
      user: "user_9012",
    },
    {
      id: 4,
      type: "BTC",
      amount: 0.1234,
      value: 4923.5,
      status: "failed",
      user: "user_3456",
    },
  ];

  const walletStats = [
    { currency: "BTC", balance: 145.6789, value: 5821472.3, change: +5.2 },
    { currency: "ETH", balance: 892.1234, value: 2230547.8, change: -2.1 },
    { currency: "USDT", balance: 45678.9, value: 45678.9, change: +0.1 },
    { currency: "BNB", balance: 567.8901, value: 136890.24, change: +3.7 },
  ];

  const transactionData = [
    { name: "Янв", transactions: 1240, volume: 45678 },
    { name: "Фев", transactions: 1356, volume: 52341 },
    { name: "Мар", transactions: 1189, volume: 48923 },
    { name: "Апр", transactions: 1678, volume: 61234 },
    { name: "Май", transactions: 1895, volume: 68945 },
    { name: "Июн", transactions: 2134, volume: 75623 },
    { name: "Июл", transactions: 2456, volume: 84732 },
  ];

  const pieData = [
    { name: "BTC", value: 45, color: "#F7931A" },
    { name: "ETH", value: 25, color: "#627EEA" },
    { name: "USDT", value: 20, color: "#26A17B" },
    { name: "BNB", value: 10, color: "#F3BA2F" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Админ панель кошелька
            </h1>
            <p className="text-gray-600">
              Управление криптовалютным кошельком Telegram
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт
            </Button>
            <Button>
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Общий баланс
              </CardTitle>
              <Icon name="DollarSign" size={20} className="text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                ${totalBalance.toLocaleString()}
              </div>
              <p className="text-xs text-green-600 mt-1">+12.3% за месяц</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Пользователи
              </CardTitle>
              <Icon name="Users" size={20} className="text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {totalUsers.toLocaleString()}
              </div>
              <p className="text-xs text-blue-600 mt-1">+247 новых за неделю</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Активные кошельки
              </CardTitle>
              <Icon name="Wallet" size={20} className="text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {activeWallets.toLocaleString()}
              </div>
              <p className="text-xs text-purple-600 mt-1">
                69% от общего числа
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Ожидающие транзакции
              </CardTitle>
              <Icon name="Clock" size={20} className="text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {pendingTransactions}
              </div>
              <p className="text-xs text-orange-600 mt-1">Требуют обработки</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
          <TabsTrigger value="wallets">Кошельки</TabsTrigger>
          <TabsTrigger value="transactions">Транзакции</TabsTrigger>
          <TabsTrigger value="users">Пользователи</TabsTrigger>
          <TabsTrigger value="security">Безопасность</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Wallet Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PieChart" size={20} />
                  Распределение по валютам
                </CardTitle>
                <CardDescription>Текущие балансы кошельков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name} ${value}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {walletStats.map((wallet) => (
                    <div
                      key={wallet.currency}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">
                            {wallet.currency}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">
                            {wallet.balance.toFixed(4)} {wallet.currency}
                          </p>
                          <p className="text-sm text-gray-600">
                            ${wallet.value.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={wallet.change > 0 ? "default" : "destructive"}
                        className="bg-green-100 text-green-800"
                      >
                        {wallet.change > 0 ? "+" : ""}
                        {wallet.change}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={20} />
                  Состояние системы
                </CardTitle>
                <CardDescription>Мониторинг сервисов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Сервер</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Онлайн</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">База данных</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Онлайн</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Blockchain подключения</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Стабильно</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Telegram Bot</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Активен</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Загрузка CPU</span>
                      <span className="text-sm text-gray-600">34%</span>
                    </div>
                    <Progress value={34} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Использование памяти</span>
                      <span className="text-sm text-gray-600">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Аналитика транзакций
              </CardTitle>
              <CardDescription>
                Динамика транзакций за последние 7 месяцев
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={transactionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="transactions"
                      stroke="#2196F3"
                      strokeWidth={2}
                      name="Количество транзакций"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600">Всего транзакций</p>
                  <p className="text-2xl font-bold text-blue-800">12,948</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600">Успешных</p>
                  <p className="text-2xl font-bold text-green-800">12,792</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-600">Неуспешных</p>
                  <p className="text-2xl font-bold text-red-800">156</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wallets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Wallet" size={20} />
                Управление кошельками
              </CardTitle>
              <CardDescription>
                Создание, мониторинг и управление кошельками пользователей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтр
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Search" size={16} className="mr-2" />
                    Поиск
                  </Button>
                </div>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Новый кошелек
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {walletStats.map((wallet) => (
                  <Card
                    key={wallet.currency}
                    className="bg-white border-l-4 border-l-blue-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">
                          {wallet.currency} Кошелек
                        </h3>
                        <Badge variant="outline">Активен</Badge>
                      </div>
                      <p className="text-2xl font-bold mb-1">
                        {wallet.balance.toFixed(4)}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        ${wallet.value.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Send" size={14} className="mr-1" />
                          Отправить
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="ArrowDown" size={14} className="mr-1" />
                          Получить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ArrowLeftRight" size={20} />
                Последние транзакции
              </CardTitle>
              <CardDescription>
                Мониторинг всех транзакций в системе
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">
                          {tx.type}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">
                          {tx.amount} {tx.type}
                        </p>
                        <p className="text-sm text-gray-600">{tx.user}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        ${tx.value.toLocaleString()}
                      </p>
                      <Badge
                        variant={
                          tx.status === "completed"
                            ? "default"
                            : tx.status === "pending"
                            ? "secondary"
                            : "destructive"
                        }
                        className={
                          tx.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {tx.status === "completed"
                          ? "Выполнена"
                          : tx.status === "pending"
                          ? "Ожидание"
                          : "Ошибка"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">
                  <Icon name="MoreHorizontal" size={16} className="mr-2" />
                  Показать еще
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                Управление пользователями
              </CardTitle>
              <CardDescription>
                Администрирование пользователей и их прав доступа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-gray-400"
                />
                <h3 className="text-lg font-semibold mb-2">
                  Раздел в разработке
                </h3>
                <p className="text-gray-600">
                  Функциональность управления пользователями будет добавлена в
                  следующем обновлении
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" size={20} />
                Безопасность
              </CardTitle>
              <CardDescription>
                Настройки безопасности и мониторинг угроз
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} className="text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">
                        Двухфакторная аутентификация
                      </p>
                      <p className="text-sm text-green-600">
                        Включена для всех администраторов
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Активно</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <Icon name="Lock" size={20} className="text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-800">
                        Шифрование данных
                      </p>
                      <p className="text-sm text-blue-600">
                        AES-256 для всех конфиденциальных данных
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Активно</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <Icon
                      name="AlertTriangle"
                      size={20}
                      className="text-yellow-600"
                    />
                    <div>
                      <p className="font-medium text-yellow-800">
                        Мониторинг подозрительной активности
                      </p>
                      <p className="text-sm text-yellow-600">
                        3 предупреждения за последние 24 часа
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Проверить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;