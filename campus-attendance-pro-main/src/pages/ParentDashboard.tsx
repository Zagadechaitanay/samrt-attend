import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  TrendingUp,
  Bell,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  User,
  BookOpen
} from "lucide-react";
import { CollegeHeader } from "@/components/CollegeHeader";
import { AttendanceChart } from "@/components/AttendanceChart";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { name: "Week 1", attendance: 94, present: 47 },
  { name: "Week 2", attendance: 88, present: 44 },
  { name: "Week 3", attendance: 96, present: 48 },
  { name: "Week 4", attendance: 92, present: 46 },
];

const recentAttendance = [
  { subject: "Data Structures", date: "Today, 10:30 AM", status: "Present", faculty: "Dr. Sharma" },
  { subject: "DBMS", date: "Today, 11:30 AM", status: "Present", faculty: "Prof. Patil" },
  { subject: "Web Development", date: "Yesterday, 09:00 AM", status: "Present", faculty: "Dr. Kumar" },
  { subject: "Algorithms", date: "Yesterday, 02:00 PM", status: "Absent", faculty: "Prof. Singh" },
  { subject: "Operating Systems", date: "2 days ago, 10:00 AM", status: "Present", faculty: "Dr. Mehta" },
];

const notifications = [
  { type: "alert", message: "Your child was absent in Algorithms class", time: "Yesterday, 2:00 PM" },
  { type: "info", message: "Monthly attendance report is now available", time: "2 days ago" },
  { type: "success", message: "Perfect attendance for this week!", time: "5 days ago" },
];

export default function ParentDashboard() {
  const { user } = useAuth();

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
                Parent Dashboard
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Welcome, {user?.fullName || "Parent"} | Monitoring: Rahul Sharma (CS-3A)
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <FileText className="w-4 h-4" />
              Download Report
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Overall Attendance</p>
                <p className="text-2xl font-bold text-primary">92.5%</p>
                <p className="text-xs text-green-600 font-medium">Above Required 75%</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Classes Attended</p>
                <p className="text-2xl font-bold text-primary">148</p>
                <p className="text-xs text-muted-foreground">Out of 160 total</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Classes Missed</p>
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-xs text-orange-600">1 this week</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Subjects</p>
                <p className="text-2xl font-bold text-primary">6</p>
                <p className="text-xs text-muted-foreground">All enrolled</p>
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
              role="parent"
              title="Child's Monthly Attendance Trend"
            />

            {/* Recent Attendance Records */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Attendance Records
                </CardTitle>
                <CardDescription>Latest class attendance history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAttendance.map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{record.subject}</p>
                        <p className="text-sm text-muted-foreground">{record.faculty} • {record.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${record.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }`}>
                        {record.status}
                      </span>
                    </div>
                  ))}
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
            {/* Notifications */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
                <CardDescription>Important updates and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${notification.type === "alert"
                        ? "border-red-200 bg-red-50"
                        : notification.type === "success"
                          ? "border-green-200 bg-green-50"
                          : "border-blue-200 bg-blue-50"
                      }`}
                  >
                    <p className="text-sm font-medium text-foreground mb-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">View Full Report</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Class Schedule</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <Bell className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Notification Settings</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Contact Faculty</span>
                </Button>
              </CardContent>
            </Card>

            {/* Student Info */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Student Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-semibold">Rahul Sharma</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Class</p>
                  <p className="font-semibold">CS-3A</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Roll Number</p>
                  <p className="font-semibold">CS2023001</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Department</p>
                  <p className="font-semibold">Computer Engineering</p>
                </div>
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
          <h3 className="font-semibold text-primary mb-2">👨‍👩‍👧 Parent Portal Active</h3>
          <p className="text-sm text-foreground/80">
            ✅ Monitor your child's attendance and academic progress in real-time<br />
            🔔 Receive instant notifications for absences and important updates<br />
            📊 Access detailed attendance reports and analytics
          </p>
        </motion.div>
      </div>
    </div>
  );
}
