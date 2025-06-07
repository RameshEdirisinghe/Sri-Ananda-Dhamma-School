import { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
};

const ContactCard: FC<Props> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col items-center bg-primary-light border border-neutral-border rounded-xl px-6 py-6 shadow-soft hover:shadow-md transition">
      <div className="mb-4 text-ui-icon bg-ui-highlight p-3 rounded-full">
        {icon}
      </div>
      <p className="text-sm font-medium text-neutral">{title}</p>
      <p className="text-sm text-neutral-muted">{value}</p>
    </div>
  );
};

export default ContactCard;
