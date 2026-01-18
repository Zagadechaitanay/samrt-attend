import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  QrCode,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Clock,
  History,
  User
} from "lucide-react";
import { CollegeHeader } from "@/components/CollegeHeader";
import { QRScannerModal } from "@/components/QRScannerModal";
import { StatCard } from "@/components/StatCard";
import { AttendanceChart } from "@/components/AttendanceChart";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { name: "Week 1", attendance: 94, present: 47 },
  { name: "Week 2", attendance: 88, present: 44 },
  { name: "Week 3", attendance: 96, present: 48 },
  { name: "Week 4", attendance: 92, present: 46 },
  { name: "Week 5", attendance: 90, present: 45 },
];

const recentClasses = [
  { subject: "Data Structures", date: "Today, 10:30 AM", status: "Present", faculty: "Dr. Sharma" },
  { subject: "DBMS", date: "Today, 11:30 AM", status: "Present", faculty: "Prof. Patil" },
  { subject: "Web Development", date: "Yesterday, 09:00 AM", status: "Present", faculty: "Dr. Kumar" },
  { subject: "Algorithms", date: "Yesterday, 02:00 PM", status: "Absent", faculty: "Prof. Singh" },
];

export default function StudentDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [qrScannerOpen, setQrScannerOpen] = useState(false);

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
                Welcome, {user?.fullName || "Student"}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Computer Engineering | Semester 3 | Roll No: CS2023001
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 gap-2"
                onClick={() => setQrScannerOpen(true)}
              >
                <QrCode className="w-5 h-5" />
                Scan QR Code
              </Button>
            </motion.div>
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
                <p className="text-xs text-green-600 font-medium">Above 75% required</p>
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
                <p className="text-xs text-muted-foreground">out of 160 total</p>
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

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold text-primary">5/5</p>
                <p className="text-xs text-green-600 font-medium">100% attendance</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Attendance Chart */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AttendanceChart
              data={chartData}
              role="student"
              title="Monthly Attendance Trend"
            />
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Quick Actions</CardTitle>
                <CardDescription>Access frequently used features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 hover:bg-primary/5"
                  onClick={() => setQrScannerOpen(true)}
                >
                  <QrCode className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Mark Attendance</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 hover:bg-primary/5"
                  onClick={() => navigate("/attendance-history")}
                >
                  <History className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">View History</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 hover:bg-primary/5"
                  onClick={() => navigate("/class-schedule")}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Class Schedule</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 hover:bg-primary/5"
                  onClick={() => navigate("/my-profile")}
                >
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">My Profile</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Attendance */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Classes
              </CardTitle>
              <CardDescription>Your latest attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentClasses.map((cls, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{cls.subject}</p>
                      <p className="text-sm text-muted-foreground">{cls.faculty} • {cls.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${cls.status === "Present"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}>
                      {cls.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Info Note */}
        <motion.div
          className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            System Status
          </h3>
          <p className="text-sm text-foreground/80">
            ✅ Attendance system is active and operational<br />
            📱 Use the "Scan QR Code" button to mark your attendance during lectures<br />
            📊 Your attendance percentage is calculated automatically
          </p>
        </motion.div>
      </div>

      {/* QR Scanner Modal */}
      <QRScannerModal
        isOpen={qrScannerOpen}
        onClose={() => setQrScannerOpen(false)}
      />
    </div>
  );
}
