import { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
};

const ContactCard: FC<Props> = ({ icon, title, value }) => {
  return (
    <div className="group flex flex-col items-center bg-white border border-neutral-100/60 rounded-[1.5rem] px-8 py-10 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 cursor-default">
      <div className="mb-6 text-primary bg-primary/5 p-5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-neutral uppercase tracking-widest mb-2">{title}</h3>
      <p className="text-lg font-bold text-neutral-soft group-hover:text-primary transition-colors">{value}</p>
    </div>
  );
};

export default ContactCard;
