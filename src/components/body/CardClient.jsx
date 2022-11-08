export const CardClient = ({ imgURL, description }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-80 sm:w-[600px] sm:h-36 bg-sky-100 rounded-md shadow overflow-hidden">
      <div className="relative top-0 w-[100%] h-[180px]">
        <img
          src={imgURL}
          alt="image card"
          className="w-full h-full object-cover"
        />
        <span className="w-full h-[80px] gradient-card absolute bottom-0 right-0 sm:top-0 sm:-right-28 sm:rotate-[-90deg] bg-slate-400"></span>
      </div>
      <p className="w-full h-full p-4 text-center text-[#001c41] flex justify-center items-center">
        {description}
      </p>
    </div>
  );
};
