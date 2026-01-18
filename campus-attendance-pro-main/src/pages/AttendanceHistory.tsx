import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, CheckCircle2, XCircle, Filter } from "lucide-react";
import { CollegeHeader } from "@/components/CollegeHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const attendanceHistory = [
    {
        date: "15 Jan 2026",
        day: "Wednesday",
        sessions: [
            { subject: "Data Structures", time: "10:30 AM", status: "Present", faculty: "Dr. Sharma", room: "Lab 101" },
            { subject: "DBMS", time: "11:30 AM", status: "Present", faculty: "Prof. Patil", room: "Room 205" },
            { subject: "Web Development", time: "02:00 PM", status: "Present", faculty: "Dr. Kumar", room: "Lab 102" },
        ]
    },
    {
        date: "14 Jan 2026",
        day: "Tuesday",
        sessions: [
            { subject: "Algorithms", time: "09:00 AM", status: "Present", faculty: "Prof. Singh", room: "Room 301" },
            { subject: "Operating Systems", time: "10:30 AM", status: "Absent", faculty: "Dr. Mehta", room: "Room 302" },
            { subject: "Web Development", time: "02:00 PM", status: "Present", faculty: "Dr. Kumar", room: "Lab 102" },
        ]
    },
    {
        date: "13 Jan 2026",
        day: "Monday",
        sessions: [
            { subject: "Data Structures", time: "10:30 AM", status: "Present", faculty: "Dr. Sharma", room: "Lab 101" },
            { subject: "DBMS", time: "11:30 AM", status: "Present", faculty: "Prof. Patil", room: "Room 205" },
            { subject: "Algorithms", time: "02:00 PM", status: "Present", faculty: "Prof. Singh", room: "Room 301" },
        ]
    },
    {
        date: "12 Jan 2026",
        day: "Sunday",
        sessions: [
            { subject: "Holiday", time: "-", status: "Holiday", faculty: "-", room: "-" },
        ]
    },
];

export default function AttendanceHistory() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            <CollegeHeader />

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/student")}
                        className="mb-4"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Button>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="font-display text-3xl font-bold text-primary mb-2">
                                Attendance History
                            </h1>
                            <p className="text-muted-foreground">
                                View your complete attendance record
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by Subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Subjects</SelectItem>
                                    <SelectItem value="ds">Data Structures</SelectItem>
                                    <SelectItem value="dbms">DBMS</SelectItem>
                                    <SelectItem value="web">Web Development</SelectItem>
                                    <SelectItem value="algo">Algorithms</SelectItem>
                                    <SelectItem value="os">Operating Systems</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="month">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Time Period" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="week">Last 7 Days</SelectItem>
                                    <SelectItem value="month">This Month</SelectItem>
                                    <SelectItem value="semester">This Semester</SelectItem>
                                    <SelectItem value="all">All Time</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </motion.div>

                {/* Summary Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="card-professional">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Total Present</p>
                                    <p className="text-2xl font-bold text-primary">148</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="card-professional">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                    <XCircle className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Total Absent</p>
                                    <p className="text-2xl font-bold text-primary">12</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="card-professional">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Attendance %</p>
                                    <p className="text-2xl font-bold text-primary">92.5%</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* History Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    {attendanceHistory.map((day, dayIndex) => (
                        <Card key={dayIndex} className="card-professional">
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-lg text-primary">{day.date}</CardTitle>
                                        <CardDescription>{day.day}</CardDescription>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium">
                                            {day.sessions.filter(s => s.status === "Present").length} / {day.sessions.filter(s => s.status !== "Holiday").length} Present
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {day.sessions.filter(s => s.status !== "Holiday").length > 0
                                                ? Math.round((day.sessions.filter(s => s.status === "Present").length / day.sessions.filter(s => s.status !== "Holiday").length) * 100)
                                                : 0}% Attendance
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {day.sessions.map((session, sessionIndex) => (
                                        <div
                                            key={sessionIndex}
                                            className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${session.status === "Holiday"
                                                    ? "bg-muted/30 border-muted"
                                                    : "border-border hover:bg-muted/50"
                                                }`}
                                        >
                                            <div className="flex items-center gap-4 flex-1">
                                                <Clock className="w-5 h-5 text-muted-foreground" />
                                                <div className="flex-1">
                                                    <p className="font-semibold text-foreground">{session.subject}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {session.faculty} • {session.time} • {session.room}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${session.status === "Present"
                                                    ? "bg-green-100 text-green-700"
                                                    : session.status === "Absent"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-gray-100 text-gray-700"
                                                }`}>
                                                {session.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>

                {/* Export Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex justify-center"
                >
                    <Button variant="outline" className="gap-2">
                        <Filter className="w-4 h-4" />
                        Export Attendance Report
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
