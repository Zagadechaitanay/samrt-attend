import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, User, BookOpen } from "lucide-react";
import { CollegeHeader } from "@/components/CollegeHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const schedule = [
    {
        day: "Monday",
        classes: [
            { subject: "Data Structures", time: "10:30 AM - 11:30 AM", faculty: "Dr. Sharma", room: "Lab 101", type: "Practical" },
            { subject: "DBMS", time: "11:30 AM - 12:30 PM", faculty: "Prof. Patil", room: "Room 205", type: "Theory" },
            { subject: "Lunch Break", time: "12:30 PM - 01:30 PM", faculty: "-", room: "-", type: "Break" },
            { subject: "Algorithms", time: "02:00 PM - 03:00 PM", faculty: "Prof. Singh", room: "Room 301", type: "Theory" },
        ]
    },
    {
        day: "Tuesday",
        classes: [
            { subject: "Algorithms", time: "09:00 AM - 10:00 AM", faculty: "Prof. Singh", room: "Room 301", type: "Theory" },
            { subject: "Operating Systems", time: "10:30 AM - 11:30 AM", faculty: "Dr. Mehta", room: "Room 302", type: "Theory" },
            { subject: "Lunch Break", time: "12:30 PM - 01:30 PM", faculty: "-", room: "-", type: "Break" },
            { subject: "Web Development", time: "02:00 PM - 03:00 PM", faculty: "Dr. Kumar", room: "Lab 102", type: "Practical" },
        ]
    },
    {
        day: "Wednesday",
        classes: [
            { subject: "Data Structures", time: "10:30 AM - 11:30 AM", faculty: "Dr. Sharma", room: "Lab 101", type: "Practical" },
            { subject: "DBMS", time: "11:30 AM - 12:30 PM", faculty: "Prof. Patil", room: "Room 205", type: "Theory" },
            { subject: "Lunch Break", time: "12:30 PM - 01:30 PM", faculty: "-", room: "-", type: "Break" },
            { subject: "Web Development", time: "02:00 PM - 03:00 PM", faculty: "Dr. Kumar", room: "Lab 102", type: "Practical" },
        ]
    },
    {
        day: "Thursday",
        classes: [
            { subject: "Operating Systems", time: "09:00 AM - 10:00 AM", faculty: "Dr. Mehta", room: "Room 302", type: "Theory" },
            { subject: "Data Structures", time: "10:30 AM - 11:30 AM", faculty: "Dr. Sharma", room: "Lab 101", type: "Theory" },
            { subject: "Lunch Break", time: "12:30 PM - 01:30 PM", faculty: "-", room: "-", type: "Break" },
            { subject: "DBMS Lab", time: "02:00 PM - 04:00 PM", faculty: "Prof. Patil", room: "Lab 203", type: "Practical" },
        ]
    },
    {
        day: "Friday",
        classes: [
            { subject: "Algorithms", time: "09:00 AM - 10:00 AM", faculty: "Prof. Singh", room: "Room 301", type: "Theory" },
            { subject: "Web Development", time: "10:30 AM - 11:30 AM", faculty: "Dr. Kumar", room: "Lab 102", type: "Practical" },
            { subject: "Lunch Break", time: "12:30 PM - 01:30 PM", faculty: "-", room: "-", type: "Break" },
            { subject: "Project Work", time: "02:00 PM - 04:00 PM", faculty: "All Faculty", room: "Project Lab", type: "Practical" },
        ]
    },
    {
        day: "Saturday",
        classes: [
            { subject: "Extra Classes", time: "09:00 AM - 12:00 PM", faculty: "As per schedule", room: "TBA", type: "Theory" },
        ]
    },
];

export default function ClassSchedule() {
    const navigate = useNavigate();
    const today = "Wednesday"; // You can make this dynamic

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

                    <div>
                        <h1 className="font-display text-3xl font-bold text-primary mb-2">
                            Class Schedule
                        </h1>
                        <p className="text-muted-foreground">
                            Computer Engineering - Semester 3 | CS-3A
                        </p>
                    </div>
                </motion.div>

                {/* Quick Info */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="card-professional">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Total Subjects</p>
                                    <p className="text-2xl font-bold text-primary">6</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="card-professional">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Weekly Hours</p>
                                    <p className="text-2xl font-bold text-primary">24</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="card-professional">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <User className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Faculty Members</p>
                                    <p className="text-2xl font-bold text-primary">5</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Schedule by Day */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    {schedule.map((daySchedule, dayIndex) => (
                        <Card
                            key={dayIndex}
                            className={`card-professional ${daySchedule.day === today ? "border-2 border-primary ring-2 ring-primary/10" : ""
                                }`}
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        <div>
                                            <CardTitle className="text-lg text-primary">{daySchedule.day}</CardTitle>
                                            {daySchedule.day === today && (
                                                <CardDescription className="text-green-600 font-medium">Today's Schedule</CardDescription>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium">{daySchedule.classes.length} Sessions</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {daySchedule.classes.map((cls, classIndex) => (
                                        <div
                                            key={classIndex}
                                            className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${cls.type === "Break"
                                                    ? "bg-muted/30 border-muted"
                                                    : cls.type === "Practical"
                                                        ? "bg-blue-50/50 border-blue-200 hover:bg-blue-50"
                                                        : "border-border hover:bg-muted/50"
                                                }`}
                                        >
                                            <div className="flex-shrink-0">
                                                <Clock className="w-5 h-5 text-muted-foreground mt-1" />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-foreground text-base">{cls.subject}</p>
                                                        <p className="text-sm text-muted-foreground mt-1">
                                                            {cls.time}
                                                        </p>
                                                        {cls.type !== "Break" && (
                                                            <div className="flex items-center gap-4 mt-2 text-sm">
                                                                <span className="flex items-center gap-1 text-muted-foreground">
                                                                    <User className="w-3.5 h-3.5" />
                                                                    {cls.faculty}
                                                                </span>
                                                                <span className="flex items-center gap-1 text-muted-foreground">
                                                                    <MapPin className="w-3.5 h-3.5" />
                                                                    {cls.room}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${cls.type === "Practical"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : cls.type === "Theory"
                                                                ? "bg-purple-100 text-purple-700"
                                                                : "bg-gray-100 text-gray-700"
                                                        }`}>
                                                        {cls.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>

                {/* Download Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <Button variant="outline" className="gap-2">
                        <Calendar className="w-4 h-4" />
                        Download Timetable
                    </Button>
                    <Button className="gap-2 bg-primary">
                        <Calendar className="w-4 h-4" />
                        Add to Calendar
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
