import { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
};

const ContactCard: FC<Props> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl px-6 py-8 shadow-md border hover:shadow-lg transition group">
      <div className="bg-orange-100 text-primary p-3 rounded-full mb-4 group-hover:scale-110 transition">
        {icon}
      </div>
      <p className="font-serif text-base text-gray-700">{title}</p>
      <p className="text-sm text-gray-500 mt-1">{value}</p>
    </div>
  );
};

export default ContactCard;
