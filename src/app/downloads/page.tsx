"use client";

import Link from "next/link";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileDown, Folder, FolderOpen, Plus, MoreVertical, X, Upload, FolderPlus, Undo2, ArrowLeft, FileText, Grid, List as ListIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const initialFolders = [
    { id: 1, name: "Admi. Design 2026", href: "#", owner: "pro", date: "Dec 13, 2025", initial: "P", color: "bg-blue-600" },
    { id: 2, name: "Admission 2025-26", href: "#", owner: "pro", date: "Nov 25, 2024", initial: "P", color: "bg-blue-600" },
    { id: 3, name: "Photos 2025", href: "#", owner: "pro", date: "Mar 6, 2025", initial: "P", color: "bg-blue-600" },
    { id: 4, name: "Photos 2026", href: "#", owner: "pro", date: "Dec 16, 2025", initial: "P", color: "bg-blue-600" },
    { id: 5, name: "rabeeu day", href: "#", owner: "Muhammedr...", date: "Aug 26, 2025", initial: "M", color: "bg-orange-400" },
    { id: 6, name: "Snap Book /Print File", href: "#", owner: "Muhammedr...", date: "Dec 25, 2025", initial: "M", color: "bg-orange-400" },
    { id: 7, name: "special days", href: "#", owner: "pro", date: "Jan 12, 2026", initial: "P", color: "bg-blue-600" },
    { id: 8, name: "Sports Day", href: "#", owner: "pro", date: "Feb 20, 2026", initial: "P", color: "bg-blue-600" },
    { id: 9, name: "ZeeQue Fest", href: "#", owner: "Muhammedr...", date: "Nov 15, 2025", initial: "M", color: "bg-orange-400" },
    { id: 10, name: "ZeeQue Logo", href: "#", owner: "pro", date: "Oct 5, 2025", initial: "P", color: "bg-blue-600" },
];

export default function DownloadsPage() {
    const [folders, setFolders] = useState(initialFolders);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newFolderName, setNewFolderName] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [openMenu, setOpenMenu] = useState<number | string | null>(null);
    const [openFolder, setOpenFolder] = useState<number | string | null>(null);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [isExpanded, setIsExpanded] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [deletedFolder, setDeletedFolder] = useState<{ folder: typeof initialFolders[0]; index: number } | null>(null);

    const handleAddFolder = () => {
        if (newFolderName.trim()) {
            const now = new Date();
            const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            setFolders([...folders, {
                id: now.getTime(),
                name: newFolderName.trim(),
                href: "#",
                owner: "Me",
                date: dateStr,
                initial: "U",
                color: "bg-primary"
            }]);
            setNewFolderName("");
            setUploadedFiles([]);
            setShowAddModal(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setUploadedFiles(Array.from(e.target.files));
        }
    };

    const handleDeleteFolder = (id: number | string) => {
        const index = folders.findIndex(f => f.id === id);
        if (index === -1) return;
        const folder = folders[index];
        setDeletedFolder({ folder, index });
        setFolders(folders.filter(f => f.id !== id));
        setOpenMenu(null);
    };

    const handleUndoDelete = () => {
        if (deletedFolder) {
            const newFolders = [...folders];
            newFolders.splice(deletedFolder.index, 0, deletedFolder.folder);
            setFolders(newFolders);
            setDeletedFolder(null);
        }
    };

    // Auto-dismiss undo toast after 5 seconds
    useEffect(() => {
        if (deletedFolder) {
            const timer = setTimeout(() => setDeletedFolder(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [deletedFolder]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#fffcf2] to-[#faeed1] dark:from-slate-900 dark:to-slate-950 font-body selection:bg-secondary selection:text-white relative overflow-hidden transition-colors duration-300">
            {/* ── Header ── */}
            <div className="w-full relative z-50">
                <div className="hidden lg:block w-full bg-white dark:bg-[#020618] transition-colors duration-300">
                    <TopHeader />
                </div>
                <div className="max-w-[1140px] mx-auto bg-white dark:bg-transparent rounded-b-[40px] shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-300 relative z-50">
                    <Navbar />
                </div>
            </div>

            {/* ══════════════════════════════════
                SECTION 1: Hero Banner
               ══════════════════════════════════ */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 right-[15%] w-20 h-20 rounded-full bg-[#fbaf01]/10 animate-pulse" />
                    <div className="absolute top-24 left-[10%] w-14 h-14 rounded-full bg-[#e83e8c]/10 animate-pulse delay-500" />
                    <div className="absolute bottom-10 left-[25%] w-16 h-16 rounded-full bg-[#0fb85c]/10 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border-4 border-dashed border-[#ef4225]/10" />
                    <div className="absolute bottom-16 right-[30%] w-10 h-10 rounded-full bg-[#0052ff]/10 animate-pulse delay-700" />
                </div>

                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-6 font-body text-sm">
                            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-default pointer-events-none">Updates</Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-primary font-semibold">Downloads</span>
                        </div>

                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="bg-primary/10 p-3 rounded-2xl">
                                <FileDown className="w-8 h-8 text-primary" />
                            </div>
                        </div>

                        <h1 className="font-heading font-extrabold text-[#222222] dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                            Important{" "}
                            <span className="relative inline-block">
                                <span className="text-primary">Downloads</span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#ef4225" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Access all essential resources, forms, curriculum details, and educational materials from ZeeQue Preschool in one place.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 100" fill="none" className="w-full h-auto">
                        <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,60 L1440,100 L0,100 Z" fill="white" className="dark:fill-slate-900" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2: Google Drive-Style Folder Grid
               ══════════════════════════════════ */}
            <section className="py-10 md:py-16 bg-white dark:bg-slate-900 relative">
                <div className="max-w-[1140px] mx-auto px-4 xl:px-8 relative z-10">

                    {/* Toolbar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <Folder className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                            <h2 className="font-heading font-bold text-[#222] dark:text-white text-xl">
                                ZeeQue PR Materials
                            </h2>
                            <span className="text-gray-400 dark:text-gray-500 font-body text-sm hidden sm:inline">
                                {folders.length} folders
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            {/* View Mode Toggle */}
                            <div className="flex items-center bg-gray-100 dark:bg-slate-800 p-1 rounded-xl border border-gray-200 dark:border-slate-700">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-gray-400 dark:text-gray-500 hover:text-gray-600"}`}
                                    title="Grid view"
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-gray-400 dark:text-gray-500 hover:text-gray-600"}`}
                                    title="List view"
                                >
                                    <ListIcon className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Expand/Collapse Toggle */}
                            {folders.length > 3 && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="inline-flex items-center gap-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl font-heading font-bold text-sm transition-all duration-300 active:scale-95 border border-gray-200 dark:border-slate-700"
                                >
                                    {isExpanded ? (
                                        <>
                                            <ChevronUp className="w-4 h-4 text-primary" />
                                            <span>Collapse</span>
                                        </>
                                    ) : (
                                        <>
                                            <ChevronDown className="w-4 h-4 text-primary" />
                                            <span>Expand</span>
                                        </>
                                    )}
                                </button>
                            )}

                            <button
                                onClick={() => setShowAddModal(true)}
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-heading font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                            >
                                <Plus className="w-4 h-4" strokeWidth={2.5} />
                                New Folder
                            </button>
                        </div>
                    </motion.div>

                    {/* Folder Layout */}
                    <div className="w-full">
                        {/* List Headers */}
                        {viewMode === "list" && (
                            <div className="hidden md:grid md:grid-cols-[1fr_200px_180px_120px_40px] px-5 py-3 border-b border-gray-100 dark:border-slate-800 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider items-center">
                                <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors group">
                                    Name <motion.span animate={{ rotate: 180 }} className="inline-block text-[10px] text-primary">▲</motion.span>
                                </div>
                                <div>Owner</div>
                                <div>Date modified</div>
                                <div>File size</div>
                                <div></div>
                            </div>
                        )}

                        <div className={viewMode === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                            : "flex flex-col border-t border-gray-50 dark:border-slate-850"
                        }>
                            <AnimatePresence mode="popLayout">
                                {folders.slice(0, isExpanded ? folders.length : 3).map((folder) => (
                                    <motion.div
                                        key={folder.id}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        layout
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="relative group">
                                            <button
                                                onClick={() => setOpenFolder(folder.id)}
                                                className={`group/btn flex items-center gap-4 bg-gray-50 dark:bg-slate-800/40 border border-gray-200/70 dark:border-slate-700/50 rounded-xl px-5 py-4 hover:bg-blue-50/60 dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-md transition-all duration-200 group/card w-full text-left ${viewMode === "list" ? "rounded-none border-x-0 border-t-0 border-b-gray-100 dark:border-b-slate-800 bg-transparent py-3.5 hover:bg-gray-100/50 dark:hover:bg-slate-800/80" : ""}`}
                                            >
                                                <div className={viewMode === "list" ? "grid grid-cols-1 md:grid-cols-[1fr_200px_180px_120px] items-center w-full gap-4" : "flex items-center gap-4 flex-1"}>
                                                    {/* Folder icon + Name */}
                                                    <div className="flex items-center gap-4 min-w-0">
                                                        <div className="flex-shrink-0">
                                                            <Folder className={`w-6 h-6 ${viewMode === "list" ? "text-gray-500 dark:text-gray-400 fill-gray-400/50 dark:fill-gray-600" : "text-gray-400 dark:text-gray-500 fill-gray-300 dark:fill-gray-600 group-hover/card:text-blue-400 group-hover/card:fill-blue-200 dark:group-hover/card:text-blue-400 dark:group-hover/card:fill-blue-500/30"} transition-colors duration-200`} />
                                                        </div>
                                                        <span className="font-body text-[15px] text-[#222] dark:text-gray-200 truncate group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-300 transition-colors duration-200">
                                                            {folder.name}
                                                        </span>
                                                    </div>

                                                    {/* List mode meta info */}
                                                    {viewMode === "list" && (
                                                        <>
                                                            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-body">
                                                                <div className={`w-6 h-6 rounded-full ${folder.color || "bg-primary"} text-white flex items-center justify-center text-[10px] font-bold`}>
                                                                    {folder.initial || "O"}
                                                                </div>
                                                                <span className="truncate">{folder.owner || "Owner"}</span>
                                                            </div>
                                                            <div className="hidden md:block text-sm text-gray-500 dark:text-gray-400 font-body">
                                                                {folder.date || "Mar 9, 2026"}
                                                            </div>
                                                            <div className="hidden md:block text-sm text-gray-400 dark:text-gray-500 font-body">
                                                                —
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </button>

                                            {/* Kebab menu button */}
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setOpenMenu(openMenu === folder.id ? null : folder.id);
                                                }}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-200/70 dark:hover:bg-slate-700 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                            >
                                                <MoreVertical className="w-4 h-4" />
                                            </button>

                                            {/* Dropdown menu */}
                                            {openMenu === folder.id && (
                                                <div className="absolute right-2 top-full mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl z-50 py-1.5 min-w-[140px]">
                                                    <button
                                                        onClick={() => handleDeleteFolder(folder.id)}
                                                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 font-body transition-colors"
                                                    >
                                                        Remove
                                                    </button>
                                                    <button
                                                        onClick={() => setOpenMenu(null)}
                                                        className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-700 font-body transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ Open Folder View Modal ═══════ */}
            <AnimatePresence>
                {openFolder !== null && folders.find(f => f.id === openFolder) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                        onClick={() => setOpenFolder(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="bg-white dark:bg-slate-800 rounded-[28px] shadow-2xl border border-gray-200 dark:border-slate-700 w-full max-w-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 p-6 border-b border-gray-100 dark:border-slate-700">
                                <button
                                    onClick={() => setOpenFolder(null)}
                                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                </button>
                                <FolderOpen className="w-6 h-6 text-blue-500 fill-blue-200 dark:fill-blue-500/30" />
                                <h3 className="font-heading font-bold text-[#222] dark:text-white text-lg flex-1 truncate">
                                    {folders.find(f => f.id === openFolder)?.name}
                                </h3>
                                <button
                                    onClick={() => setOpenFolder(null)}
                                    className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>

                            {/* Content - Empty state */}
                            <div className="p-8 flex flex-col items-center justify-center min-h-[280px] text-center">
                                <div className="w-20 h-20 rounded-3xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center mb-5">
                                    <FileText className="w-10 h-10 text-gray-300 dark:text-gray-500" />
                                </div>
                                <h4 className="font-heading font-bold text-[#222] dark:text-white text-base mb-2">
                                    No files yet
                                </h4>
                                <p className="text-gray-400 dark:text-gray-500 font-body text-sm max-w-xs mb-6">
                                    This folder is empty. Files added to this folder will appear here.
                                </p>
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-xl font-heading font-bold text-sm hover:bg-blue-600 transition-colors">
                                    <Upload className="w-4 h-4" />
                                    Upload Files
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ═══════ Add Folder Modal ═══════ */}
            <AnimatePresence>
                {showAddModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                        onClick={() => setShowAddModal(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Modal header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                    <FolderPlus className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-[#222] dark:text-white text-xl">New Folder</h3>
                                    <p className="text-gray-400 dark:text-gray-500 font-body text-sm">Create and add files</p>
                                </div>
                            </div>

                            {/* Folder name input */}
                            <div className="mb-5">
                                <label className="block font-heading font-bold text-sm text-gray-600 dark:text-gray-300 mb-2">Folder Name</label>
                                <input
                                    type="text"
                                    value={newFolderName}
                                    onChange={(e) => setNewFolderName(e.target.value)}
                                    placeholder="Enter folder name..."
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-[#222] dark:text-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-gray-400"
                                    autoFocus
                                    onKeyDown={(e) => { if (e.key === "Enter") handleAddFolder(); }}
                                />
                            </div>

                            {/* File upload area */}
                            <div className="mb-6">
                                <label className="block font-heading font-bold text-sm text-gray-600 dark:text-gray-300 mb-2">Upload Files (optional)</label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-gray-200 dark:border-slate-600 rounded-xl p-6 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200"
                                >
                                    <Upload className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
                                    <p className="text-gray-400 dark:text-gray-500 font-body text-sm">
                                        Click to browse or drag files here
                                    </p>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                {uploadedFiles.length > 0 && (
                                    <div className="mt-3 space-y-1.5">
                                        {uploadedFiles.map((file, i) => (
                                            <div key={i} className="flex items-center gap-2 bg-gray-50 dark:bg-slate-700 rounded-lg px-3 py-2">
                                                <FileDown className="w-4 h-4 text-primary flex-shrink-0" />
                                                <span className="text-gray-600 dark:text-gray-300 font-body text-xs truncate">{file.name}</span>
                                                <span className="text-gray-400 dark:text-gray-500 font-body text-xs ml-auto flex-shrink-0">
                                                    {(file.size / 1024).toFixed(0)} KB
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 font-heading font-bold text-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddFolder}
                                    disabled={!newFolderName.trim()}
                                    className="flex-1 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-heading font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                                >
                                    Create Folder
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Undo Delete Toast ── */}
            <AnimatePresence>
                {deletedFolder && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 dark:bg-slate-700 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px]"
                    >
                        <Undo2 className="w-5 h-5 text-gray-400 shrink-0" />
                        <span className="font-body text-sm flex-1">
                            <strong>&quot;{deletedFolder.folder.name}&quot;</strong> deleted
                        </span>
                        <button
                            onClick={handleUndoDelete}
                            className="px-4 py-1.5 bg-primary text-white rounded-xl font-heading font-bold text-sm hover:bg-primary/90 transition-colors shrink-0"
                        >
                            Undo
                        </button>
                        <button
                            onClick={() => setDeletedFolder(null)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Footer ── */}
            <Footer />
        </main>
    );
}
