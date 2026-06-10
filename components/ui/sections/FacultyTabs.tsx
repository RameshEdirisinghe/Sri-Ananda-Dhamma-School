"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import teachersData from "@/content/teachers.json";
import TeacherCard from "./TeacherCard";

// Exact mapping as requested by the user
const squadMapping: Record<string, string> = {
  // Dhamma Knowledge Forum - Senior Section
  "Ramesh Jayarathne": "Dhamma Knowledge Forum - Senior Section",
  "G. W. Harshi Dewrangi de Silva": "Dhamma Knowledge Forum - Senior Section",
  "Kushantha Laknuwan": "Dhamma Knowledge Forum - Senior Section",
  "G. G. Amasha Sharindi": "Dhamma Knowledge Forum - Senior Section",

  // Dhamma Knowledge Forum - Junior Section
  "N.G. Samantha Swarnamali": "Dhamma Knowledge Forum - Junior Section",
  "A. K. Oshadha Sandeep Methpriya": "Dhamma Knowledge Forum - Junior Section",
  "Thushari Tharanga Liyanage": "Dhamma Knowledge Forum - Junior Section",
  "Ironika Wijesinghe": "Dhamma Knowledge Forum - Junior Section",

  // Creative Writing Circle
  "W. A. D. Thilakshana Kawindi": "Creative Writing Circle",
  "Savini Hiranya": "Creative Writing Circle",
  "Chathumini Sandeepa Methpriya": "Creative Writing Circle",

  // Chanting & Musical Circle
  "H. Randika Sajith": "Chanting & Musical Circle",
  "Miran Malitha Kulatunga": "Chanting & Musical Circle",
  "Chamodi Surandhika": "Chanting & Musical Circle",
  "Uvindu Dhanujaya": "Chanting & Musical Circle",
  "Ushan Madushanka Gallage": "Chanting & Musical Circle",
  "Tharindu Dhananjaya Perera": "Chanting & Musical Circle",

  // Art and Aesthetic Forum
  "Sandaruwan Vithanage": "Art and Aesthetic Forum",
  "Balanuwan Samarasinghe": "Art and Aesthetic Forum",

  // Oratory Forum
  "Aadhya Wijesekara": "Oratory Forum",
  "Hiruni Avishka Denipitiya": "Oratory Forum",
  "Ramesh Edirisinghe": "Oratory Forum",
  "Chandupa Lokuliyana": "Oratory Forum",
};

// Define Squad Order
const squadOrder = [
  "Dhamma Knowledge Forum - Senior Section",
  "Dhamma Knowledge Forum - Junior Section",
  "Chanting & Musical Circle",
  "Creative Writing Circle",
  "Art and Aesthetic Forum",
  "Oratory Forum"
];

export default function FacultyTabs() {
  const [activeTab, setActiveTab] = useState<string>("Dhamma Knowledge Forum - Senior Section");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const squads = useMemo(() => {
    const grouped: Record<string, typeof teachersData.teachers[0][]> = {};
    
    // Initialize groups based on squadOrder to ensure they exist even if empty
    squadOrder.forEach(s => grouped[s] = []);

    teachersData.teachers.forEach((t) => {
      const squad = squadMapping[t.name];
      if (squad) {
        grouped[squad].push(t);
      }
    });

    // Only return squads that have teachers and are in the allowed order
    return squadOrder
      .filter(name => grouped[name].length > 0)
      .map(name => ({
        name,
        teachers: grouped[name],
      }));
  }, []);

  const activeSquad = squads.find((s) => s.name === activeTab) || squads[0];

  return (
    <div className="w-full max-w-7xl mx-auto pb-24">
      {/* Mobile Dropdown */}
      <div className="lg:hidden relative mb-8 z-20 px-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-6 py-4 border border-neutral-200 rounded-2xl text-sm font-bold text-[#8B5A2B] bg-white shadow-sm"
        >
          {activeTab}
          <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} className="text-[#8B5A2B]/70">
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 bg-white border border-neutral-100 rounded-2xl shadow-xl overflow-hidden max-h-[60vh] overflow-y-auto"
            >
              {squads.map((s) => (
                <button
                  key={s.name}
                  onClick={() => {
                    setActiveTab(s.name);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-6 py-4 text-sm font-bold transition-colors border-b border-neutral-50 last:border-0 ${
                    activeTab === s.name ? "bg-[#8B5A2B]/10 text-[#8B5A2B]" : "text-neutral-500 hover:bg-neutral-50 hover:text-[#8B5A2B]"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Sidebar + Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12 px-4 sm:px-6">
        
        {/* Sidebar Nav */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-24 bg-white/50 backdrop-blur-md rounded-3xl p-4 border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400 mb-6 px-4 pt-2">
              Faculty Squads
            </h3>
            <div className="flex flex-col gap-1.5">
              {squads.map((s) => {
                const isActive = activeTab === s.name;
                return (
                  <button
                    key={s.name}
                    onClick={() => setActiveTab(s.name)}
                    className={`relative px-4 py-3 text-sm font-bold rounded-2xl transition-all duration-300 text-left overflow-hidden group ${
                      isActive
                        ? "text-[#8B5A2B]"
                        : "text-neutral-500 hover:text-[#8B5A2B]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute inset-0 bg-[#8B5A2B]/10 rounded-2xl z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-between">
                      {s.name}
                      <span className={`text-[10px] py-0.5 px-2 rounded-full transition-colors ${
                        isActive ? "bg-[#8B5A2B]/20 text-[#8B5A2B]" : "bg-neutral-100 text-neutral-400 group-hover:bg-[#8B5A2B]/10 group-hover:text-[#8B5A2B]"
                      }`}>
                        {s.teachers.length}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Squad Content */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-10"
            >
              {/* Header */}
              <div className="pb-6 border-b border-neutral-100">
                <div className="flex gap-1.5 mb-4 opacity-80">
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#8B5A2B]/30" />
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#8B5A2B]/60" />
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#8B5A2B]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
                  {activeSquad.name}
                </h2>
                <p className="text-neutral-500 mt-3 max-w-2xl text-sm md:text-base">
                  Meet the dedicated individuals guiding our students in the {activeSquad.name}. 
                  Their commitment and wisdom form the backbone of our Dhamma School.
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {activeSquad.teachers.map((t: typeof teachersData.teachers[0], index: number) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <TeacherCard {...t} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
