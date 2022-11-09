export const Contact = () => {
  return (
    <section id="contact" className="pt-20">
      <h2 className="text-center text-3xl font-bold text-[#001c41]">Contact</h2>

      <section className="flex justify-center flex-wrap w-full my-24 px-10">
        <div className="w-full max-w-2xl px-10 lg:max-w-sm lg:p-0">
          <form className="w-full flex flex-col justify-center items-center gap-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-sky-100 h-12 px-3 border-none outline-none input-radius transition-all bar-input__unenabled focus:bar-input__enabled"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full bg-sky-100 h-12 px-3 border-none outline-none input-radius transition-all bar-input__unenabled focus:bar-input__enabled"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="w-full bg-sky-100 p-3 border-none outline-none input-radius transition-all bar-input__unenabled focus:bar-input__enabled resize-none"
            ></textarea>
          </form>
        </div>
        <div className="w-full max-w-lg ml-7 hidden lg:block">
          <img
            src="https://i.imgur.com/EO83pXy.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </section>
  );
};
