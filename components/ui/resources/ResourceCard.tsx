"use client";
import { FC } from "react";
import { FileText, Download, Eye, Bookmark, Clock } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  fileType: string;
  fileUrl: string;
  previewable?: boolean;
  grade?: string;
  subject?: string;
  year?: string;
};

const ResourceCard: FC<Props> = ({
  title,
  fileType,
  fileUrl,
  previewable,
  grade,
  subject,
  year,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group bg-white rounded-[1.5rem] border border-neutral-200/60 p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors duration-500" />

      <div className="flex flex-col h-full gap-5">
        {/* Header: Icon & Type */}
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
            <FileText size={24} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-muted">
              {fileType}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-bold text-accent">
              <Clock size={10} />
              <span>Oct 2023</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 flex-1">
          <h3 className="text-lg font-serif font-bold text-neutral leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {grade && (
              <span className="px-2 py-1 bg-neutral-100 rounded-md text-[10px] font-bold text-neutral-soft uppercase tracking-tighter">
                {grade}
              </span>
            )}
            {subject && (
              <span className="px-2 py-1 bg-primary/5 rounded-md text-[10px] font-bold text-primary uppercase tracking-tighter">
                {subject}
              </span>
            )}
            {year && (
              <span className="px-2 py-1 bg-accent/5 rounded-md text-[10px] font-bold text-accent uppercase tracking-tighter">
                {year}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
          {previewable && (
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-100 text-neutral font-bold text-xs hover:bg-neutral-200 transition-colors">
              <Eye size={14} />
              Preview
            </button>
          )}
          <a
            href={fileUrl}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white font-bold text-xs hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
          >
            <Download size={14} />
            Download
          </a>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-200 text-neutral-soft hover:text-primary hover:border-primary/30 transition-all">
            <Bookmark size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
