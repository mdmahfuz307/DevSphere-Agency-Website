import React from "react";
import { useAuth } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Briefcase,
  Users,
  TrendingUp,
  Plus,
  ExternalLink,
  Settings,
  Bell,
  Search,
} from "lucide-react";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];

const projects = [
  {
    id: 1,
    name: "Webcode SaaS Platform",
    status: "Active",
    progress: 75,
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Eco-Friendly Mobile App",
    status: "Review",
    progress: 100,
    date: "1 week ago",
  },
  {
    id: 3,
    name: "AI Portfolio Builder",
    status: "In Design",
    progress: 30,
    date: "Just now",
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-base-100 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-secondary">
              Welcome back, {user?.displayName}! 👋
            </h1>
            <p className="text-gray-500 mt-1">
              Here's what's happening with your projects today.
            </p>
          </div>
          <div className="flex items-center space-x-4 w-full lg:w-auto">
            <div className="relative flex-grow lg:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
            </div>
            <button className="p-2 bg-white rounded-xl border border-gray-200 hover:text-primary relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 bg-white rounded-xl border border-gray-200 hover:text-primary">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Active Projects",
              value: "12",
              icon: Briefcase,
              color: "bg-blue-500",
              trend: "+2.5%",
            },
            {
              label: "Total Clients",
              value: "48",
              icon: Users,
              color: "bg-purple-500",
              trend: "+12%",
            },
            {
              label: "Revenue Growth",
              value: "$24.5k",
              icon: TrendingUp,
              color: "bg-green-500",
              trend: "+18%",
            },
            {
              label: "Tasks Completed",
              value: "156",
              icon: Briefcase,
              color: "bg-orange-500",
              trend: "+4%",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-4"
            >
              <div
                className={`${stat.color} p-4 rounded-2xl text-white shadow-lg`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-secondary">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded">
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-secondary">
                Analytics Overview
              </h3>
              <select className="select select-sm select-bordered rounded-xl border-gray-200 focus:ring-primary">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0F62FE" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#0F62FE" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#0F62FE"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-secondary mb-6">
              Recent Projects
            </h3>
            <div className="space-y-6 flex-grow">
              {projects.map((p) => (
                <div key={p.id} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-secondary group-hover:text-primary transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-xs text-gray-400">{p.date}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-1000"
                      style={{ width: `${p.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        p.status === "Active"
                          ? "bg-blue-50 text-blue-600"
                          : p.status === "Review"
                          ? "bg-green-50 text-green-600"
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {p.status}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {p.progress}% Complete
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 btn btn-primary rounded-xl flex items-center justify-center space-x-2 text-white shadow-lg shadow-blue-200">
              <Plus className="w-4 h-4" /> <span>Add New Project</span>
            </button>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 flex justify-between items-center border-b border-gray-50">
            <h3 className="text-xl font-bold text-secondary">
              Transaction History
            </h3>
            <button className="text-primary font-bold text-sm flex items-center hover:underline">
              View All <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-gray-50 border-none">
                  <th className="text-gray-500 font-bold">Project Name</th>
                  <th className="text-gray-500 font-bold">Date</th>
                  <th className="text-gray-500 font-bold">Amount</th>
                  <th className="text-gray-500 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    project: "Web Redesign",
                    date: "Oct 12, 2025",
                    amount: "$2,400",
                    status: "Completed",
                  },
                  {
                    project: "Mobile App API",
                    date: "Oct 08, 2025",
                    amount: "$1,200",
                    status: "Pending",
                  },
                  {
                    project: "SEO Audit",
                    date: "Sep 29, 2025",
                    amount: "$500",
                    status: "Completed",
                  },
                ].map((t, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition-colors border-gray-50"
                  >
                    <td className="font-bold text-secondary">{t.project}</td>
                    <td className="text-gray-500">{t.date}</td>
                    <td className="font-bold text-secondary">{t.amount}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          t.status === "Completed"
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
