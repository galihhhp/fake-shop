type Props = {
  children: JSX.Element[] | JSX.Element;
  title: string;
};

const Section = ({ children, title }: Props) => {
  return (
    <div className="container flex flex-col gap-4 mt-10 md:px-0 px-5">
      <div className="flex items-center gap-4">
        <div className="bg-red-500 rounded-lg w-8 h-12" />
        <h1 className="text-red-500 font-bold md:text-xl">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Section;
