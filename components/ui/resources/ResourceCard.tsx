import { FC } from "react";
import { FileText, FileType2, File } from "lucide-react";

type Props = {
  title: string;
  fileType: string;
  fileUrl: string;
  previewable?: boolean;
  grade?: string;
  subject?: string;
  year?: string;
};

const fileIcons: Record<string, React.ReactElement> = {
  pdf: <FileType2 className="w-6 h-6 text-red-500" />,
  docx: <FileText className="w-6 h-6 text-blue-500" />,
  default: <File className="w-6 h-6 text-gray-400" />,
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
  const icon = fileIcons[fileType] || fileIcons.default;

  return (
    <div className="bg-white border border-borderGray rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-sm font-semibold text-textPrimary">{title}</h3>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        {grade && <span>{grade}</span>}
        {subject && <span> • {subject}</span>}
        {year && <span> • {year}</span>}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        {previewable && (
          <button className="text-primary hover:text-primaryHover transition">
            Preview
          </button>
        )}
        <a
          href={fileUrl}
          target="_blank"
          className="text-primaryHover hover:underline"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
