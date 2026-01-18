import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  GraduationCap,
  UserPlus,
  FileText,
  Download,
  Settings,
  Shield,
  BarChart3
} from "lucide-react";
import { CollegeHeader } from "@/components/CollegeHeader";
import { AttendanceChart } from "@/components/AttendanceChart";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { name: "Week 1", attendance: 94, present: 470 },
  { name: "Week 2", attendance: 88, present: 440 },
  { name: "Week 3", attendance: 96, present: 480 },
  { name: "Week 4", attendance: 92, present: 460 },
];

const recentActivities = [
  { action: "New student registered", user: "Rahul Sharma", time: "2 hours ago" },
  { action: "Lecture session started", user: "Dr. Kumar (Faculty)", time: "3 hours ago" },
  { action: "Attendance marked", user: "CS-3A Class", time: "5 hours ago" },
  { action: "Report exported", user: "Admin", time: "1 day ago" },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <CollegeHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
            <div>
              <h1 className="font-display text-3xl font-bold text-primary mb-2">
                Administrator Dashboard
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Welcome, {user?.fullName || "Administrator"} | System Administration Panel
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
              <Button className="bg-primary hover:bg-primary/90 gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-6 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Engineering</SelectItem>
              <SelectItem value="it">Information Technology</SelectItem>
              <SelectItem value="mech">Mechanical Engineering</SelectItem>
              <SelectItem value="civil">Civil Engineering</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Semesters" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Semesters</SelectItem>
              <SelectItem value="1">Semester 1</SelectItem>
              <SelectItem value="2">Semester 2</SelectItem>
              <SelectItem value="3">Semester 3</SelectItem>
              <SelectItem value="4">Semester 4</SelectItem>
              <SelectItem value="5">Semester 5</SelectItem>
              <SelectItem value="6">Semester 6</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="This Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-primary">1,248</p>
                <p className="text-xs text-green-600 font-medium">+12 this month</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Faculty Members</p>
                <p className="text-2xl font-bold text-primary">42</p>
                <p className="text-xs text-muted-foreground">All departments</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Classes</p>
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-xs text-muted-foreground">Across 4 departments</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Attendance</p>
                <p className="text-2xl font-bold text-primary">91.5%</p>
                <p className="text-xs text-green-600 font-medium">+2.5% vs last month</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Attendance Chart */}
            <AttendanceChart
              data={chartData}
              role="admin"
              title="Institute-wide Attendance Overview"
            />

            {/* Management Options */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Management Tools</CardTitle>
                <CardDescription>Quick access to system configuration and management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto py-4 justify-start gap-3 hover:bg-primary/5"
                    onClick={() => navigate('/admin/users')}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm">Manage Users</p>
                      <p className="text-xs text-muted-foreground">View all Students, Faculty, and Parents</p>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-4 justify-start gap-3 hover:bg-primary/5">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm">Manage Classes</p>
                      <p className="text-xs text-muted-foreground">Create, edit, or delete classes</p>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-4 justify-start gap-3 hover:bg-primary/5">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm">Manage Subjects</p>
                      <p className="text-xs text-muted-foreground">Configure course catalog</p>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-4 justify-start gap-3 hover:bg-primary/5">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm">Analytics</p>
                      <p className="text-xs text-muted-foreground">View detailed reports</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Recent Activity */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Recent Activity</CardTitle>
                <CardDescription>Latest system events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                    <p className="text-xs text-primary mt-1">{activity.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">System Reports</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <Settings className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">System Settings</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">User Permissions</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Info Note */}
        <motion.div
          className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-semibold text-primary mb-2">🔐 Administrator Panel Active</h3>
          <p className="text-sm text-foreground/80">
            ✅ Full system access with comprehensive management tools<br />
            👥 Manage users, classes, subjects, and view all attendance records<br />
            📊 Export detailed reports and analytics for institutional planning
          </p>
        </motion.div>
      </div>
    </div>
  );
}
