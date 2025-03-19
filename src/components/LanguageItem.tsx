export type LanguageItemProps = {
  name: string;
  description: string;
  image?: string;
  children: React.ReactNode;
};
const LanguageItem = ({ name, description, children }: LanguageItemProps) => {
  return (
    <div className="carousel-item flex flex-col text-center">
      <div className="avatar">
        <div className="rounded-lg">{children}</div>
      </div>
      <div className="">
        <p className="text-wrap flex flex-col text-slate-500">
          <span className="font-semibold text-lg">{name}</span>
          <span className="font-semibold text-lg">{description}</span>
        </p>
      </div>
    </div>
  );
};

export default LanguageItem;
