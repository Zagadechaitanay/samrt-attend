import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Calendar,
  Clock,
  QrCode,
  Play,
  StopCircle,
  FileText,
  TrendingUp,
  User
} from "lucide-react";
import { CollegeHeader } from "@/components/CollegeHeader";
import { AttendanceChart } from "@/components/AttendanceChart";
import { useAuth } from "@/hooks/useAuth";
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
  { name: "Mon", attendance: 94, present: 47 },
  { name: "Tue", attendance: 88, present: 44 },
  { name: "Wed", attendance: 96, present: 48 },
  { name: "Thu", attendance: 92, present: 46 },
  { name: "Fri", attendance: 90, present: 45 },
];

const myClasses = [
  { name: "CS-3A", subject: "Data Structures", students: 50, time: "10:30 AM" },
  { name: "CS-3B", subject: "DBMS", students: 48, time: "11:30 AM" },
  { name: "IT-4A", subject: "Web Development", students: 45, time: "02:00 PM" },
];

export default function FacultyDashboard() {
  const { user } = useAuth();
  const [selectedClass, setSelectedClass] = useState("");
  const [sessionActive, setSessionActive] = useState(false);

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
                Welcome, {user?.fullName || "Faculty"}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Computer Engineering Department | Faculty ID: FAC001
              </p>
            </div>
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
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">My Classes</p>
                <p className="text-2xl font-bold text-primary">6</p>
                <p className="text-xs text-muted-foreground">3 today</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-primary">285</p>
                <p className="text-xs text-muted-foreground">Across all classes</p>
              </div>
            </div>
          </div>

          <div className="card-professional p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sessions Today</p>
                <p className="text-2xl font-bold text-primary">0</p>
                <p className="text-xs text-muted-foreground">No active sessions</p>
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
                <p className="text-2xl font-bold text-primary">92%</p>
                <p className="text-xs text-green-600 font-medium">+4% from last week</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Start Lecture Section */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Lecture Controls */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Lecture Management</CardTitle>
                <CardDescription>Start a new lecture session and generate QR code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs3a">CS-3A</SelectItem>
                      <SelectItem value="cs3b">CS-3B</SelectItem>
                      <SelectItem value="it4a">IT-4A</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ds">Data Structures</SelectItem>
                      <SelectItem value="dbms">DBMS</SelectItem>
                      <SelectItem value="web">Web Development</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Lecture Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theory">Theory</SelectItem>
                      <SelectItem value="practical">Practical</SelectItem>
                      <SelectItem value="lab">Lab</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  {!sessionActive ? (
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2"
                      onClick={() => setSessionActive(true)}
                    >
                      <Play className="w-5 h-5" />
                      Start Lecture Session
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white gap-2"
                      onClick={() => setSessionActive(false)}
                    >
                      <StopCircle className="w-5 h-5" />
                      End Lecture Session
                    </Button>
                  )}
                  <Button variant="outline" className="gap-2">
                    <QrCode className="w-5 h-5" />
                    Generate QR
                  </Button>
                </div>

                {sessionActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4"
                  >
                    <p className="text-sm font-medium text-green-800 mb-2">
                      ✅ Lecture Session Active
                    </p>
                    <p className="text-xs text-green-700">
                      Students can now scan the QR code to mark their attendance
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>

            {/* Attendance Chart */}
            <AttendanceChart
              data={chartData}
              role="faculty"
              title="This Week's Attendance Overview"
            />
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Quick Actions */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">View Reports</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Class Schedule</span>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/5">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Session History</span>
                </Button>
              </CardContent>
            </Card>

            {/* Today's Classes */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">Today's Classes</CardTitle>
                <CardDescription>Your scheduled lectures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {myClasses.map((cls, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <p className="font-semibold text-foreground">{cls.subject}</p>
                    <p className="text-sm text-muted-foreground">{cls.name} • {cls.students} students</p>
                    <p className="text-xs text-primary font-medium mt-1">{cls.time}</p>
                  </div>
                ))}
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
          <h3 className="font-semibold text-primary mb-2">📚 Faculty Dashboard Active</h3>
          <p className="text-sm text-foreground/80">
            ✅ Start new lecture sessions and generate QR codes for attendance<br />
            📊 Monitor real-time attendance statistics for all your classes<br />
            📝 Export attendance reports in Excel or PDF format
          </p>
        </motion.div>
      </div>
    </div>
  );
}
