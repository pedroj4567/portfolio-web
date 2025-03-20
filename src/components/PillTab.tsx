export type PillTabProps = {
  text: string;
  primary?: boolean;
};

const PillTab = ({ text }: PillTabProps) => {
  return (
    <span
      className={` bg-gradient-to-tl from-teal-600 via-teal-700 to-teal-500 bg-clip-text text-transparent text-[25px] font-bold pb-3   transition-all `}
    >
      {text}
    </span>
  );
};

export default PillTab;
