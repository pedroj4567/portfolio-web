export type PillTabProps = {
  text: string;
  primary?: boolean;
};

const PillTab = ({ text, primary }: PillTabProps) => {
  return (
    <span
      className={` ${
        primary ? "bg-teal-500 text-white" : ""
      }  p-3 rounded-lg border-slate-100  text-teal-600 text-[17px] font-bold shadow-md hover:bg-teal-600 hover:text-white transition-all cursor-pointer`}
    >
      {text}
    </span>
  );
};

export default PillTab;
