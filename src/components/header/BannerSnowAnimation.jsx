export const BannerSnowAnimation = () => {
  return (
    <div className="w-full h-screen absolute top-0 overflow-hidden">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => {
        return (
          <img
            key={value}
            style={{ width: value * 2.5 }}
            className={`snowflake object-cover relative`}
            src="./imgs/snowflake.svg"
            alt="banner snowflake"
          />
        );
      })}
    </div>
  );
};
