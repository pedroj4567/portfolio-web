export type ContactInformationProps = {
  information: string;
  label: string;
  children: React.ReactNode;
};

const ContactInformation = ({
  children,
  information,
  label,
}: ContactInformationProps) => {
  return (
    <div>
      <div className="flex w-80 items-center mb-3">
        <span className="text-teal-600">{children}</span>
        <span className="ml-2 font-bold text-teal-600">{label}:</span>
        <p className="ml-2 font-bold text-slate-600 "> {information}</p>
      </div>
    </div>
  );
};

export default ContactInformation;
