export type CardProjectProps = {
  tag: string;
  title: string;
  caption: string;
  link: string;
  image: string;
};

const CardProject = ({
  caption,
  link,
  tag,
  title,
  image,
}: CardProjectProps) => {
  return (
    <div>
      {" "}
      <div className="card bg-base-100 w-96 border border-slate-200 shadow-sm mb-8">
        <figure>
          <img src={image} alt="Project image" />
        </figure>
        <div className="ml-4 mt-3  w-25 text-center rounded-2xl bg-teal-600 text-white ">
          <span>{tag}</span>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xs">{caption}</p>
          <div className="card-actions justify-end">
            {link && (
              <a href={link} className="btn bg-teal-600 text-white">
                Ver mas
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
