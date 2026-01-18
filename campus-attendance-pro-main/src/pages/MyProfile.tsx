import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    BookOpen,
    Edit,
    Camera
} from "lucide-react";
import { CollegeHeader } from "@/components/CollegeHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

export default function MyProfile() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const profileData = {
        fullName: "Rahul Sharma",
        enrollmentId: "CS2023001",
        email: "rahul.sharma@polytechnic-awasari.edu",
        phone: "+91-9876543210",
        class: "CS-3A",
        semester: "3rd Semester",
        department: "Computer Engineering",
        academicYear: "2023-26",
        dateOfBirth: "15 March 2005",
        bloodGroup: "B+",
        address: "123, Main Street, Awasari Khurd, Maharashtra",
        parentName: "Mr. Rajesh Sharma",
        parentContact: "+91-9876543211",
        admissionDate: "July 2023",
        rollNo: "01"
    };

    const academicInfo = {
        currentSemester: "3",
        totalSemesters: "6",
        overallAttendance: "92.5%",
        subjects: 6,
        activeProjects: 2
    };

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

                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="font-display text-3xl font-bold text-primary mb-2">
                                My Profile
                            </h1>
                            <p className="text-muted-foreground">
                                View and manage your personal information
                            </p>
                        </div>
                        <Button className="gap-2">
                            <Edit className="w-4 h-4" />
                            Edit Profile
                        </Button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <Card className="card-professional">
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    {/* Profile Picture */}
                                    <div className="relative inline-block mb-4">
                                        <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                                            {profileData.fullName.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                                            <Camera className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Name and ID */}
                                    <h2 className="font-display text-2xl font-bold text-primary mb-1">
                                        {profileData.fullName}
                                    </h2>
                                    <p className="text-muted-foreground mb-1">{profileData.enrollmentId}</p>
                                    <p className="text-sm text-muted-foreground mb-6">{profileData.class}</p>

                                    {/* Quick Stats */}
                                    <div className="space-y-3 text-left">
                                        <div className="p-3 rounded-lg bg-muted/50">
                                            <p className="text-xs text-muted-foreground mb-1">Department</p>
                                            <p className="font-semibold text-foreground">{profileData.department}</p>
                                        </div>
                                        <div className="p-3 rounded-lg bg-muted/50">
                                            <p className="text-xs text-muted-foreground mb-1">Semester</p>
                                            <p className="font-semibold text-foreground">{profileData.semester}</p>
                                        </div>
                                        <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                                            <p className="text-xs text-muted-foreground mb-1">Overall Attendance</p>
                                            <p className="font-semibold text-green-700 text-lg">{academicInfo.overallAttendance}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right Column - Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Personal Information */}
                        <Card className="card-professional">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Personal Information
                                </CardTitle>
                                <CardDescription>Your personal details and contact information</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs text-muted-foreground">Full Name</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.fullName}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Enrollment ID</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.enrollmentId}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Date of Birth</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.dateOfBirth}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Blood Group</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.bloodGroup}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Mail className="w-3 h-3" />
                                            Email Address
                                        </label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.email}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Phone className="w-3 h-3" />
                                            Phone Number
                                        </label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.phone}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-xs text-muted-foreground flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            Address
                                        </label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.address}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Academic Information */}
                        <Card className="card-professional">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Academic Information
                                </CardTitle>
                                <CardDescription>Your academic details and enrollment information</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs text-muted-foreground">Class</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.class}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Roll Number</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.rollNo}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Department</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.department}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Semester</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.semester}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Academic Year</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.academicYear}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Admission Date</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.admissionDate}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Total Subjects</label>
                                        <p className="font-semibold text-foreground mt-1">{academicInfo.subjects}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground">Active Projects</label>
                                        <p className="font-semibold text-foreground mt-1">{academicInfo.activeProjects}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Parent/Guardian Information */}
                        <Card className="card-professional">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Parent/Guardian Information
                                </CardTitle>
                                <CardDescription>Emergency contact details</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs text-muted-foreground">Parent/Guardian Name</label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.parentName}</p>
                                    </div>
                                    <div>
                                        <label className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Phone className="w-3 h-3" />
                                            Contact Number
                                        </label>
                                        <p className="font-semibold text-foreground mt-1">{profileData.parentContact}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <Button variant="outline" className="gap-2">
                        <Calendar className="w-4 h-4" />
                        View Attendance Report
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <BookOpen className="w-4 h-4" />
                        View Exam Results
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
