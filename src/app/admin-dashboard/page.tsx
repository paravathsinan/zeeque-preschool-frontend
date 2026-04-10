"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { 
  Users,
  Plus, 
  Filter, 
  Download, 
  MoreVertical, 
  Eye, 
  Edit2, 
  Trash2, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  User,
  MoreHorizontal,
  X,
  GraduationCap,
  Search,
  Briefcase,
  MapPin,
  ClipboardList,
  Fingerprint,
  Users2,
  CalendarDays,
  Activity,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Info,
  Layers,
  Award,
  Loader2,
  AlertCircle,
  RefreshCcw,
  CheckCircle2,
  Save,
  Undo2,
  Trash,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

// Trailee management API configuration
const API_BASE_URL = "https://api.myzeeque.com";
const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_TOKEN || "";

const mapApiDataToTrainee = (apiItem: any) => {
  const d = apiItem.data || {};
  return {
    id: apiItem.enrollment_number || apiItem.id,
    api_id: apiItem.id,
    name: d.fullName || "Unnamed Candidate",
    email: d.email || "No email",
    phone: d.phone || "No phone",
    whatsapp: d.whatsapp || "No whatsapp",
    photo: apiItem.photo_url ? `${API_BASE_URL}${apiItem.photo_url}` : "/images/gallery/gallery photos/RYZ03180.JPG",
    qualification: d.generalEdu || "Not specified",
    batch: d.trainingHistory?.[0]?.batch || d.trainingHistory?.[0]?.basicBatch || "No batch",
    trainingYear: d.trainingHistory?.[0]?.year || "N/A",
    appliedDate: apiItem.created_at ? new Date(apiItem.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "N/A",
    personal: {
      dob: d.dob || "N/A",
      gender: d.gender || "N/A",
      maritalStatus: d.maritalStatus || "N/A",
      houseName: d.houseName || "N/A",
      place: d.place || "N/A",
      city: d.city || "N/A",
      state: d.state || "N/A",
      country: d.country || "N/A",
      postalCode: d.postalCode || "N/A",
      address: `${d.houseName || ''}, ${d.place || ''}, ${d.city || ''}, ${d.state || ''}, ${d.postalCode || ''}`.trim() || d.place || "N/A"
    },
    family: {
      fatherName: d.fatherName || "N/A",
      fatherPhone: d.fatherMobile || "N/A",
      motherName: d.motherName || "N/A",
      husbandName: d.husbandName || "N/A",
      husbandPhone: d.husbandMobile || "N/A"
    },
    education: {
      religious: d.religiousEdu || "N/A",
      general: d.generalEdu || "N/A"
    },
    trainingHistory: (d.trainingHistory || []).map((h: any) => ({
      batch: h.batch || h.basicBatch,
      year: h.year,
      registerNo: h.registerNumber || "N/A"
    })),
    experience: {
      isZahrawi: d.isZahrawi || "No",
      zahrawiYear: d.zahrawiYear || "",
      currentSchool: d.currentSchoolName || "N/A",
      currentSchoolJoinDate: d.currentSchoolJoinDate || "",
      history: (d.employmentHistory || []).map((h: any) => ({
        organizationName: h.organizationName,
        designation: h.designation,
        fromDate: h.fromDate,
        toDate: h.toDate
      }))
    },
    leaves: (d.longLeaveRows || []).map((l: any) => ({
      status: l.status,
      fromDate: l.fromDate,
      toDate: l.toDate,
      months: l.months,
      rejoinDate: l.rejoinDate
    }))
  };
};

export default function AdminDashboardPage() {
  const [trainees, setTrainees] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Toast State
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: null }), 5000);
  };

  // Modal States
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState("personal");
  const [selectedTrainee, setSelectedTrainee] = useState<any>(null);
  const [actionType, setActionType] = useState<"view" | "edit" | "delete" | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 50;

  const fetchApplications = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin/applications`, {
        headers: {
          "x-admin-token": ADMIN_TOKEN
        }
      });
      if (!response.ok) throw new Error("Failed to fetch applications");
      const data = await response.json();
      const mappedData = data.map(mapApiDataToTrainee);
      setTrainees(mappedData);
    } catch (err: any) {
      setError(err.message || "Something went wrong while fetching data.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const newEnrollmentsCount = trainees.filter(t => {
    const appliedDate = new Date(t.appliedDate);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return appliedDate >= sevenDaysAgo;
  }).length;

  // Unique Batches Calculation
  const uniqueBatchesCount = Array.from(new Set(trainees.map(t => t.batch).filter(b => b && b !== "No batch" && b !== "N/A"))).length;

  // Experienced Trainees Calculation (those with previous employment history)
  const experiencedTraineesCount = trainees.filter(t => (t.experience?.history?.length || 0) > 0).length;

  // Filtering Logic
  const filteredTrainees = trainees.filter(t => {
    const nameMatches = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const emailMatches = t.email.toLowerCase().includes(searchQuery.toLowerCase());
    const idMatches = t.id.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatches || emailMatches || idMatches;
  });

  const totalPages = Math.ceil(filteredTrainees.length / ITEMS_PER_PAGE);
  const paginatedTrainees = filteredTrainees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset pagination when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, trainees.length]);

  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: selectedTrainee
  });

  const { fields: trainingFields, append: appendTraining, remove: removeTraining } = useFieldArray({
    control,
    name: "trainingHistory"
  });

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: "experience.history"
  });

  const { fields: leaveFields, append: appendLeave, remove: removeLeave } = useFieldArray({
    control,
    name: "leaves"
  });

  useEffect(() => {
    if (selectedTrainee) {
      reset(selectedTrainee);
    }
  }, [selectedTrainee, reset]);

  const handleActionInitiate = (trainee: any, type: "view" | "edit" | "delete") => {
    setSelectedTrainee(trainee);
    setActionType(type);
    setIsEditMode(type === "edit");
    
    // Explicitly reset form with trainee data to ensure sync
    reset(trainee);
    
    if (type === "view") {
      setIsDetailOpen(true);
    } else {
      setIsVerifyOpen(true);
    }
  };

  const handleActionConfirm = async () => {
    if (actionType === "delete" && selectedTrainee) {
      setIsProcessing(true);
      try {
        const url = `${API_BASE_URL}/api/v1/admin/applications/${selectedTrainee.id}/`;
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'x-admin-token': ADMIN_TOKEN
          }
        });

        if (response.ok) {
          setTrainees(prev => prev.filter(t => t.id !== selectedTrainee.id));
          showToast("Trainee application deleted successfully", "success");
          setIsVerifyOpen(false);
          setSelectedTrainee(null);
        } else {
          const errorData = await response.json().catch(() => ({}));
          showToast(`Delete failed: ${errorData.detail || "Not Found"} (${url})`, "error");
        }
      } catch (err: any) {
        showToast(`Network error: ${err.message}`, "error");
      } finally {
        setIsProcessing(false);
      }
    } else {
      setIsVerifyOpen(false);
      setIsDetailOpen(true);
    }
  };


  const onEditSave = async (data: any) => {
    setIsProcessing(true);
    try {
      // Correcting payload structure to match backend 'data' JSON
      const payload = {
        data: {
          fullName: data.name,
          email: data.email,
          phone: data.phone,
          whatsapp: data.whatsapp,
          dob: data.personal?.dob,
          gender: data.personal?.gender,
          maritalStatus: data.personal?.maritalStatus,
          houseName: data.personal?.houseName,
          place: data.personal?.place,
          city: data.personal?.city,
          state: data.personal?.state,
          country: data.personal?.country,
          postalCode: data.personal?.postalCode,
          fatherName: data.family?.fatherName,
          fatherMobile: data.family?.fatherPhone,
          motherName: data.family?.motherName,
          husbandName: data.family?.husbandName,
          husbandMobile: data.family?.husbandPhone,
          religiousEdu: data.education?.religious,
          generalEdu: data.education?.general,
          trainingHistory: data.trainingHistory,
          employmentHistory: data.experience?.history,
          longLeaveRows: data.leaves
        }
      };

      const url = `${API_BASE_URL}/api/v1/admin/applications/${selectedTrainee.id}/`;
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': ADMIN_TOKEN
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        showToast("Profile updated successfully", "success");
        fetchApplications(); 
        setIsDetailOpen(false);
        setIsEditMode(false);
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.detail || errorData.message || "Not Found";
        showToast(`${errorMessage} (${url})`, "error");
      }
    } catch (err: any) {
      showToast(err.message || "Error saving changes", "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExportData = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Teacher Trainees");

    // Define Columns
    worksheet.columns = [
      { header: "Enrollment ID", key: "id", width: 22 },
      { header: "Full Name", key: "name", width: 25 },
      { header: "Email Address", key: "email", width: 30 },
      { header: "Phone Number", key: "phone", width: 18 },
      { header: "WhatsApp", key: "whatsapp", width: 18 },
      { header: "Date of Birth", key: "dob", width: 15 },
      { header: "Gender", key: "gender", width: 12 },
      { header: "Marital Status", key: "marital", width: 15 },
      { header: "House Name", key: "house", width: 20 },
      { header: "Place", key: "place", width: 20 },
      { header: "City", key: "city", width: 20 },
      { header: "State", key: "state", width: 20 },
      { header: "Country", key: "country", width: 15 },
      { header: "Postal Code", key: "postal", width: 15 },
      { header: "Full Address", key: "address", width: 40 },
      { header: "Father's Name", key: "fatherName", width: 25 },
      { header: "Father's Mobile", key: "fatherPhone", width: 18 },
      { header: "Mother's Name", key: "motherName", width: 25 },
      { header: "Husband's Name", key: "husbandName", width: 25 },
      { header: "Husband's Mobile", key: "husbandPhone", width: 18 },
      { header: "Religious Edu", key: "religious", width: 15 },
      { header: "General Edu", key: "general", width: 15 },
      { header: "Training History", key: "trainingHistory", width: 50 },
      { header: "Employment History", key: "employmentHistory", width: 50 },
      { header: "Application Date", key: "date", width: 18 },
    ];

    // Style Header
    const headerRow = worksheet.getRow(1);
    headerRow.height = 35;
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF1E293B' } // Slate 800
      };
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFFFF' },
        size: 11
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    setIsLoading(true);

    try {
      // Add Data
      for (const [index, t] of trainees.entries()) {
        const rowData = {
          id: t.id,
          name: t.name,
          email: t.email,
          phone: t.phone,
          whatsapp: t.whatsapp,
          dob: t.personal?.dob || 'N/A',
          gender: t.personal?.gender || 'N/A',
          marital: t.personal?.maritalStatus || 'N/A',
          house: t.personal?.houseName || 'N/A',
          place: t.personal?.place || 'N/A',
          city: t.personal?.city || 'N/A',
          state: t.personal?.state || 'N/A',
          country: t.personal?.country || 'N/A',
          postal: t.personal?.postalCode || 'N/A',
          address: t.personal?.address || 'N/A',
          fatherName: t.family?.fatherName || 'N/A',
          fatherPhone: t.family?.fatherPhone || 'N/A',
          motherName: t.family?.motherName || 'N/A',
          husbandName: t.family?.husbandName || 'N/A',
          husbandPhone: t.family?.husbandPhone || 'N/A',
          religious: t.education?.religious || 'N/A',
          general: t.education?.general || 'N/A',
          // Summarize Training History
          trainingHistory: (t.trainingHistory || []).map((h: any) => 
            `${h.batch} (${h.year})${h.registerNo !== 'N/A' ? ` - Reg: ${h.registerNo}` : ''}`
          ).join('\n'),
          // Summarize Employment History
          employmentHistory: (t.experience?.history || []).map((h: any) => 
            `${h.organizationName} as ${h.designation} (${h.fromDate} to ${h.toDate || 'Present'})`
          ).join('\n'),
          date: t.appliedDate
        };

        const row = worksheet.addRow(rowData);
        row.height = 50; // Increased height to ensure multi-line content is visible
        row.alignment = { wrapText: true, vertical: 'middle', horizontal: 'left' };
      }

      // Generate Excel File
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      saveAs(blob, `ZeeQue_Trainees_Detailed_${new Date().toISOString().split('T')[0]}.xlsx`);
    } catch (err) {
      console.error("Excel export failed:", err);
      alert("Detailed export failed. Please check console for details.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-extrabold text-[#222] dark:text-white tracking-tight">
            RB <span className="text-gray-400 font-normal">/</span> Teacher Trainees
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Manage and verify teaching trainee applications
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleExportData}
            disabled={isLoading || trainees.length === 0}
            className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-200 px-4 py-2.5 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all shadow-sm group disabled:opacity-50"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Export Data
          </button>
          <button 
            onClick={() => router.push("/preschool-teacher-training-kerala")}
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            <Plus className="w-4 h-4" />
            Add New Trainee
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Trainees", value: isLoading ? "..." : trainees.length, info: "Active system entries", icon: User, color: "blue" },
          { label: "Recent Enrollments", value: isLoading ? "..." : newEnrollmentsCount, info: "Last 7 days", icon: Clock, color: "emerald" },
          { label: "Total Batches", value: isLoading ? "..." : uniqueBatchesCount, info: "Unique batches identified", icon: Activity, color: "amber" },
          { label: "Experienced Staff", value: isLoading ? "..." : experiencedTraineesCount, info: "With school history", icon: GraduationCap, color: "purple" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-4 rounded-[24px] border border-gray-100 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
                ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400' : ''}
                ${stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400' : ''}
                ${stat.color === 'amber' ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400' : ''}
                ${stat.color === 'purple' ? 'bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400' : ''}
              `}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 dark:text-gray-500 font-bold text-xs uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-heading font-extrabold text-gray-900 dark:text-white leading-none mt-1">{stat.value}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium">{stat.info}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden min-h-[500px]">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Users2 className="w-5 h-5 text-gray-400" />
            <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest">Candidate List</h2>
          </div>

          <div className="flex flex-1 items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search candidates..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:ring-2 focus:ring-primary/20 rounded-2xl py-2.5 pl-11 pr-4 text-[13px] transition-all"
              />
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">
                <Filter className="w-5 h-5" />
              </button>
              <p className="hidden sm:block text-[13px] text-gray-400 dark:text-gray-500 font-medium whitespace-nowrap">
                <span className="text-gray-900 dark:text-white font-bold">{filteredTrainees.length}</span> candidates | Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>
        </div>

        {/* Loading/Error States */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full flex items-center justify-center"
            >
              <Loader2 className="w-6 h-6 text-primary" />
            </motion.div>
            <p className="text-sm font-bold text-gray-400 animate-pulse uppercase tracking-widest">Fetching applications...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-24 text-center px-10">
            <div className="w-16 h-16 rounded-3xl bg-red-50 dark:bg-red-950/20 text-red-500 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Connection Problem</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-xs">{error}</p>
            <button 
              onClick={fetchApplications}
              className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-gray-900 dark:bg-slate-700 text-white font-bold hover:bg-black transition-all shadow-xl"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}

        {/* Custom Table Component */}
        {!isLoading && !error && (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-slate-800/20">
                    <th className="px-4 py-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800">Enrollment ID</th>
                    <th className="px-4 py-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800">Candidate</th>
                    <th className="px-4 py-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800">Contact</th>
                    <th className="px-4 py-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800">Training Batch</th>
                    <th className="px-4 py-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800">Applied Date</th>
                    <th className="px-4 py-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {filteredTrainees.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-20 text-center">
                        <div className="flex flex-col items-center justify-center">
                           <Users2 className="w-12 h-12 text-gray-200 dark:text-slate-800 mb-4" />
                           <p className="text-gray-400 dark:text-gray-600 font-bold uppercase tracking-widest text-xs">No matching trainees found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    paginatedTrainees.map((trainee, idx) => (
                      <motion.tr 
                        key={trainee.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => handleActionInitiate(trainee, "view")}
                        className="hover:bg-gray-50/50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer"
                      >
                        <td className="px-4 py-3 font-mono text-[13px] font-bold text-primary dark:text-orange-400">
                          {trainee.id}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="relative w-9 h-9 shrink-0 rounded-xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm ring-2 ring-gray-100 dark:ring-slate-800 group-hover:scale-110 transition-transform duration-300">
                              <Image src={trainee.photo} alt={trainee.name} fill className="object-cover" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-gray-900 dark:text-white text-[14px] group-hover:text-primary transition-colors">{trainee.name}</span>
                              <span className="text-gray-400 dark:text-gray-500 text-[11px] font-medium truncate max-w-[120px]">{trainee.qualification}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                              <Phone className="w-2.5 h-2.5" />
                              <span className="text-[12px] font-medium">{trainee.phone}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                              <Mail className="w-2.5 h-2.5" />
                              <span className="text-[11px] font-medium truncate max-w-[150px]">{trainee.email}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-gray-700 dark:text-gray-200 capitalize">{trainee.batch}</span>
                            <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium">Joined {trainee.trainingYear}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3.5 h-3.5 text-gray-300" />
                            <span className="text-[12px] font-medium">{trainee.appliedDate}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-center gap-1.5">
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleActionInitiate(trainee, "edit"); }}
                              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-500 hover:text-emerald-500 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all shadow-inner border border-transparent hover:border-gray-200 dark:hover:border-slate-600" title="Edit"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleActionInitiate(trainee, "delete"); }}
                              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 text-gray-500 hover:text-red-500 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all shadow-inner border border-transparent hover:border-gray-200 dark:hover:border-slate-600" title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer / Pagination */}
            <div className="p-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 dark:border-slate-800 px-8 gap-4">
              <p className="text-[13px] font-medium text-gray-400 dark:text-gray-500">
                Showing <span className="text-gray-900 dark:text-white font-bold">{Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredTrainees.length)}</span> to <span className="text-gray-900 dark:text-white font-bold">{Math.min(currentPage * ITEMS_PER_PAGE, filteredTrainees.length)}</span> of <span className="font-bold text-gray-900 dark:text-white">{filteredTrainees.length}</span> candidates
              </p>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentPage === 1 ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed' : 'text-primary hover:bg-primary/10'}`}
                >
                  Previous
                </button>
                <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-none scrollbar-hide">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => {
                      if (totalPages <= 7) return true;
                      if (p === 1 || p === totalPages) return true;
                      return Math.abs(p - currentPage) <= 1;
                    })
                    .map((p, i, arr) => (
                      <React.Fragment key={p}>
                        {i > 0 && arr[i-1] !== p - 1 && <span className="text-gray-400 mx-1">...</span>}
                        <button 
                          onClick={() => setCurrentPage(p)}
                          className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${currentPage === p ? 'bg-primary text-white shadow-md shadow-primary/25' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
                        >
                          {p}
                        </button>
                      </React.Fragment>
                    ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentPage === totalPages || totalPages === 0 ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed' : 'text-primary hover:bg-primary/10'}`}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Verification Modal */}
      <AnimatePresence>
        {isVerifyOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVerifyOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner
                  ${actionType === 'delete' ? 'bg-red-50 text-red-500' : 
                    actionType === 'edit' ? 'bg-emerald-50 text-emerald-500' : 'bg-primary/10 text-primary'}
                `}>
                  {actionType === 'delete' ? <Trash2 className="w-8 h-8" /> : 
                   actionType === 'edit' ? <Edit2 className="w-8 h-8" /> : <Eye className="w-8 h-8" />}
                </div>
                
                <h3 className="text-xl font-heading font-extrabold text-gray-900 dark:text-white mb-2 capitalize">
                  Confirm {actionType}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
                  Are you sure you want to <strong>{actionType}</strong> the profile of <strong>{selectedTrainee?.name}</strong>? This action requires administrative verification.
                </p>

                <div className="grid grid-cols-2 gap-3 w-full">
                  <button 
                    onClick={() => setIsVerifyOpen(false)}
                    className="px-6 py-3 rounded-2xl font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all border border-gray-100 dark:border-slate-800"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleActionConfirm}
                    className={`px-6 py-3 rounded-2xl font-bold text-white shadow-lg transition-all
                      ${actionType === 'delete' ? 'bg-red-500 hover:bg-red-600 shadow-red-200' : 
                        actionType === 'edit' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200' : 'bg-primary hover:bg-primary/90 shadow-primary/20'}
                    `}
                  >
                    Yes, Proceed
                  </button>
                </div>
              </div>

              {/* Decorative side element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Trainee Details Modal */}
      <AnimatePresence>
        {isDetailOpen && selectedTrainee && (
          <div className="fixed inset-0 z-[210] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.95, opacity: 0, x: 50 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[600px]"
            >
              {/* Sidebar Tabs */}
              <div className="w-full md:w-64 bg-gray-50 dark:bg-slate-800/50 border-r border-gray-100 dark:border-slate-800 p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-white dark:border-slate-700">
                    <Image src={selectedTrainee.photo} alt={selectedTrainee.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm truncate">{selectedTrainee.name}</h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">{selectedTrainee.id}</p>
                  </div>
                </div>

                <div className="space-y-1 flex-1">
                  {[
                    { id: "personal", label: "Personal Info", icon: User },
                    { id: "family", label: "Family Details", icon: Users2 },
                    { id: "education", label: "Education", icon: GraduationCap },
                    { id: "training", label: "Training History", icon: Award },
                    { id: "employment", label: "Experience", icon: Briefcase },
                    { id: "leaves", label: "Leave Records", icon: CalendarDays },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveModalTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold transition-all ${activeModalTab === tab.id ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"}`}
                    >
                      <tab.icon className={`w-4 h-4 ${activeModalTab === tab.id ? "text-white" : "text-gray-400"}`} />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-white dark:bg-slate-900">
                <form onSubmit={handleSubmit(onEditSave)} className="flex-1 flex flex-col h-full overflow-hidden">
                  {/* Modal Header/Toolbar */}
                  <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-heading font-extrabold text-gray-900 dark:text-white capitalize">
                        {isEditMode ? "Editing" : "Viewing"} {activeModalTab.replace(/([A-Z])/g, ' $1')}
                      </h2>
                      {!isEditMode && (
                        <button 
                          type="button"
                          onClick={() => setIsEditMode(true)}
                          className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                          title="Switch to Edit Mode"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {isEditMode && (
                        <button 
                          type="button"
                          onClick={() => setIsEditMode(false)}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-all text-sm"
                        >
                          <Undo2 className="w-4 h-4" />
                          Cancel
                        </button>
                      )}
                      <button 
                        type="button"
                        onClick={() => setIsDetailOpen(false)}
                        className="w-10 h-10 rounded-2xl bg-gray-50 dark:bg-slate-800 text-gray-500 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700 transition-all border border-gray-100 dark:border-slate-800"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {/* Personal Tab */}
                    {activeModalTab === "personal" && (
                      <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="grid grid-cols-2 gap-8">
                          <DetailField label="Full Name" value={selectedTrainee.name} icon={User} isEdit={isEditMode} register={register} name="name" />
                          <DetailField label="Date of Birth" value={selectedTrainee.personal?.dob} icon={CalendarDays} isEdit={isEditMode} register={register} name="personal.dob" type="date" />
                          <DetailField label="Gender" value={selectedTrainee.personal?.gender} icon={Activity} isEdit={isEditMode} register={register} name="personal.gender" />
                          <DetailField label="Marital Status" value={selectedTrainee.personal?.maritalStatus} icon={Users2} isEdit={isEditMode} register={register} name="personal.maritalStatus" />
                          <DetailField label="Qualification" value={selectedTrainee.qualification} icon={GraduationCap} isEdit={isEditMode} register={register} name="qualification" />
                          <DetailField label="Email Address" value={selectedTrainee.email} icon={Mail} isEdit={isEditMode} register={register} name="email" type="email" />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                           <DetailField label="Mobile Phone" value={selectedTrainee.phone} icon={Smartphone} isEdit={isEditMode} register={register} name="phone" />
                           <DetailField label="WhatsApp Number" value={selectedTrainee.whatsapp} icon={Phone} isEdit={isEditMode} register={register} name="whatsapp" />
                        </div>
                        
                        <div className="p-6 rounded-3xl bg-gray-50/50 dark:bg-slate-800/20 border border-gray-100 dark:border-slate-800 space-y-6">
                           <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Detailed Address Components</h4>
                           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                              <DetailField label="House Name" value={selectedTrainee.personal?.houseName} icon={MapPin} isEdit={isEditMode} register={register} name="personal.houseName" />
                              <DetailField label="Place" value={selectedTrainee.personal?.place} icon={MapPin} isEdit={isEditMode} register={register} name="personal.place" />
                              <DetailField label="City" value={selectedTrainee.personal?.city} icon={MapPin} isEdit={isEditMode} register={register} name="personal.city" />
                              <DetailField label="State" value={selectedTrainee.personal?.state} icon={MapPin} isEdit={isEditMode} register={register} name="personal.state" />
                              <DetailField label="Country" value={selectedTrainee.personal?.country} icon={MapPin} isEdit={isEditMode} register={register} name="personal.country" />
                              <DetailField label="Postal Code" value={selectedTrainee.personal?.postalCode} icon={Fingerprint} isEdit={isEditMode} register={register} name="personal.postalCode" />
                           </div>
                        </div>
                      </div>
                    )}

                  {/* Family Tab */}
                  {activeModalTab === "family" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="grid grid-cols-2 gap-8">
                        <DetailField label="Father's Name" value={selectedTrainee.family?.fatherName} icon={User} isEdit={isEditMode} register={register} name="family.fatherName" />
                        <DetailField label="Father's Phone" value={selectedTrainee.family?.fatherPhone} icon={Smartphone} isEdit={isEditMode} register={register} name="family.fatherPhone" />
                        <DetailField label="Mother's Name" value={selectedTrainee.family?.motherName} icon={User} isEdit={isEditMode} register={register} name="family.motherName" />
                      </div>
                      {(watch("personal.maritalStatus") === "Married" || selectedTrainee.personal?.maritalStatus === "Married") && (
                        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 grid grid-cols-2 gap-8">
                          <DetailField label="Husband's Name" value={selectedTrainee.family?.husbandName} icon={User} isEdit={isEditMode} register={register} name="family.husbandName" />
                          <DetailField label="Husband's Phone" value={selectedTrainee.family?.husbandPhone} icon={Smartphone} isEdit={isEditMode} register={register} name="family.husbandPhone" />
                        </div>
                      )}
                    </div>
                  )}

                   {/* Education Tab */}
                  {activeModalTab === "education" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                       <DetailField label="Religious Education" value={selectedTrainee.education?.religious} icon={Info} isEdit={isEditMode} register={register} name="education.religious" />
                       <DetailField label="General Education" value={selectedTrainee.education?.general} icon={GraduationCap} isEdit={isEditMode} register={register} name="education.general" />
                    </div>
                  )}

                  {/* Training Tab */}
                  {activeModalTab === "training" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="grid grid-cols-2 gap-8">
                        <DetailField label="Current Batch" value={selectedTrainee.batch} icon={Layers} isEdit={isEditMode} register={register} name="batch" />
                        <DetailField label="Training Year" value={selectedTrainee.trainingYear} icon={Calendar} isEdit={isEditMode} register={register} name="trainingYear" />
                      </div>
                      
                      <div className="mt-8">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Past Training Records</h4>
                          {isEditMode && (
                            <button 
                              type="button" 
                              onClick={() => appendTraining({ batch: "", year: "", registerNo: "N/A" })}
                              className="text-[10px] font-bold text-primary flex items-center gap-1 hover:underline"
                            >
                              <Plus className="w-3 h-3" /> Add Record
                            </button>
                          )}
                        </div>
                        <div className="space-y-3">
                          {(isEditMode ? trainingFields : (selectedTrainee.trainingHistory || [])).map((h: any, i: number) => (
                            <div key={isEditMode ? h.id : i} className="flex items-center gap-3">
                              <div className="flex-1 flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
                                {isEditMode ? (
                                  <div className="grid grid-cols-2 gap-4 w-full">
                                    <input {...register(`trainingHistory.${i}.batch`)} placeholder="Batch Name" className="text-sm font-bold bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                    <input {...register(`trainingHistory.${i}.year`)} placeholder="Year" className="text-sm font-bold bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                  </div>
                                ) : (
                                  <>
                                    <div>
                                      <p className="text-sm font-bold text-gray-900 dark:text-white">{h.batch}</p>
                                      <p className="text-xs text-gray-500">Year: {h.year}</p>
                                    </div>
                                    <div className="text-right">
                                      <p className={`text-[11px] font-bold ${h.registerNo === 'N/A' ? 'text-gray-400' : 'text-primary'}`}>{h.registerNo}</p>
                                    </div>
                                  </>
                                )}
                              </div>
                              {isEditMode && (
                                <button type="button" onClick={() => removeTraining(i)} className="text-gray-400 hover:text-rose-500 transition-colors">
                                  <Trash className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                   {/* Employment Tab */}
                   {activeModalTab === "employment" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="grid grid-cols-2 gap-8">
                        <DetailField label="Current School" value={selectedTrainee.experience?.currentSchool} icon={Briefcase} isEdit={isEditMode} register={register} name="experience.currentSchool" />
                        <DetailField label="Join Date" value={selectedTrainee.experience?.currentSchoolJoinDate} icon={CalendarDays} isEdit={isEditMode} register={register} name="experience.currentSchoolJoinDate" type="date" />
                      </div>
                      <DetailField label="Zahrawi Status" value={selectedTrainee.experience?.isZahrawi + (selectedTrainee.experience?.zahrawiYear ? ` (${selectedTrainee.experience?.zahrawiYear})` : '')} icon={Info} isEdit={isEditMode} register={register} name="experience.isZahrawi" />
                      
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Previous Employment</h4>
                          {isEditMode && (
                            <button 
                              type="button" 
                              onClick={() => appendExperience({ organizationName: "", designation: "", fromDate: "", toDate: "" })}
                              className="text-[10px] font-bold text-primary flex items-center gap-1 hover:underline"
                            >
                              <Plus className="w-3 h-3" /> Add Employer
                            </button>
                          )}
                        </div>
                        <div className="space-y-4">
                          {(isEditMode ? experienceFields : (selectedTrainee.experience?.history || [])).map((exp: any, i: number) => (
                            <div key={isEditMode ? exp.id : i} className="flex items-start gap-4">
                              <div className="flex-1 p-5 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30">
                                {isEditMode ? (
                                  <div className="space-y-4">
                                    <input {...register(`experience.history.${i}.organizationName`)} placeholder="School/Organization Name" className="w-full text-sm font-bold bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                    <div className="grid grid-cols-3 gap-4">
                                      <input {...register(`experience.history.${i}.designation`)} placeholder="Designation" className="text-sm font-medium bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                      <input {...register(`experience.history.${i}.fromDate`)} type="date" className="text-sm font-medium bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                      <input {...register(`experience.history.${i}.toDate`)} type="date" className="text-sm font-medium bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <div className="flex justify-between items-start mb-2">
                                      <p className="text-sm font-bold text-gray-900 dark:text-white">{exp.organizationName}</p>
                                      <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{exp.fromDate} - {exp.toDate}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{exp.designation}</p>
                                  </>
                                )}
                              </div>
                              {isEditMode && (
                                <button type="button" onClick={() => removeExperience(i)} className="pt-5 text-gray-400 hover:text-rose-500 transition-colors">
                                  <Trash className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                   {/* Leaves Tab */}
                  {activeModalTab === "leaves" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Long Leave History</h4>
                        {isEditMode && (
                          <button 
                            type="button" 
                            onClick={() => appendLeave({ status: "", months: "", fromDate: "", toDate: "", rejoinDate: "" })}
                            className="text-[10px] font-bold text-primary flex items-center gap-1 hover:underline"
                          >
                            <Plus className="w-3 h-3" /> Add Leave
                          </button>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        {(isEditMode ? leaveFields : (selectedTrainee.leaves || [])).length > 0 ? (
                          (isEditMode ? leaveFields : (selectedTrainee.leaves || [])).map((l: any, i: number) => (
                            <div key={isEditMode ? l.id : i} className="flex items-start gap-4">
                                <div className="flex-1 p-5 rounded-[28px] bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
                                  {isEditMode ? (
                                    <div className="grid grid-cols-2 gap-4">
                                      <input {...register(`leaves.${i}.status`)} placeholder="Type/Status" className="text-sm font-bold bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                      <input {...register(`leaves.${i}.months`)} placeholder="Months" className="text-sm font-medium bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                      <input {...register(`leaves.${i}.fromDate`)} type="date" className="text-sm font-medium bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                      <input {...register(`leaves.${i}.toDate`)} type="date" className="text-sm font-medium bg-transparent border-b border-gray-200 focus:border-primary outline-none" />
                                      <input {...register(`leaves.${i}.rejoinDate`)} type="date" placeholder="Rejoin Date" className="text-sm font-medium bg-transparent border-b border-gray-200 focus:border-primary outline-none col-span-2" />
                                    </div>
                                  ) : (
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <div className="flex items-center gap-2 mb-2">
                                          <div className={`w-2 h-2 rounded-full ${l.status?.toLowerCase().includes('medical') ? 'bg-rose-400' : 'bg-amber-400'}`} />
                                          <p className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-tight">{l.status}</p>
                                        </div>
                                        <p className="text-[13px] font-bold text-gray-400 mb-2">Rejoin on: {l.rejoinDate} ({l.months} Months)</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                                          <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {l.fromDate}</div>
                                          <ArrowRight className="w-2.5 h-2.5" />
                                          <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {l.toDate}</div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {isEditMode && (
                                  <button type="button" onClick={() => removeLeave(i)} className="pt-5 text-gray-400 hover:text-rose-500 transition-colors">
                                    <Trash className="w-4 h-4" />
                                  </button>
                                )}
                            </div>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center py-20 text-center">
                             <div className="w-16 h-16 rounded-3xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center mb-4">
                               <Calendar className="w-8 h-8 text-gray-300" />
                             </div>
                             <p className="text-sm font-bold text-gray-400 capitalize">No leave records found</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-gray-50/50 dark:bg-slate-800/20 border-t border-gray-100 dark:border-slate-800 flex justify-end gap-3">
                  {isEditMode ? (
                    <button 
                      type="submit"
                      disabled={isProcessing}
                      className="px-8 py-3 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 disabled:opacity-50"
                    >
                      {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      Save Changes
                    </button>
                  ) : (
                    <button 
                      type="button"
                      onClick={() => setIsDetailOpen(false)}
                      className="px-6 py-2.5 bg-gray-900 dark:bg-slate-700 text-white rounded-xl font-bold hover:bg-black transition-all shadow-md text-sm"
                    >
                      Close Profile
                    </button>
                  )}
                </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>

        {/* Toast Notification */}
        <AnimatePresence>
          {toast.type && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[300] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border ${
                toast.type === "success" 
                ? "bg-emerald-500 border-emerald-400 text-white" 
                : "bg-rose-500 border-rose-400 text-white"
              }`}
            >
              {toast.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <p className="font-bold text-sm tracking-wide">{toast.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

// Helper Components
function DetailField({ label, value, icon: Icon, fullWidth = false, isEdit = false, register, name, type = "text" }: { 
  label: string, 
  value: any, 
  icon: any, 
  fullWidth?: boolean,
  isEdit?: boolean,
  register?: any,
  name?: string,
  type?: string
}) {
  return (
    <div className={`${fullWidth ? 'col-span-2' : ''}`}>
      <div className="flex items-center gap-2 mb-1.5 px-1">
        <Icon className="w-3 h-3 text-gray-400" />
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      </div>
      <div className={`p-4 rounded-2xl ${isEdit ? 'bg-white border-primary/20 ring-1 ring-primary/5' : 'bg-gray-50 dark:bg-slate-800/50 border-gray-100/50 dark:border-slate-800/50'} border min-h-[50px] flex items-center shadow-inner group transition-all duration-300`}>
        {isEdit && register && name ? (
          <input 
            {...register(name)}
            type={type}
            className="w-full bg-transparent text-[13px] font-bold text-gray-900 dark:text-white border-none outline-none focus:ring-0 p-0"
          />
        ) : (
          <p className="text-[13px] font-bold text-gray-900 dark:text-white leading-relaxed">{value || "Not Provided"}</p>
        )}
      </div>
    </div>
  );
}
