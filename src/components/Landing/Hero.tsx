export default function Hero() {
  return (
    <div>
      <div className="max-w-md max-h-80">
        {" "}
        <img
          alt=""
          src={`nahsahh.png`}
          className="rounded-xl hover:shadow-[#19418c] hover:-translate-y-1  shadow-lg duration-300"
        />
      </div>

      <div>
        <h1 className="text-2xl font-semibold italic dark:text-gray-200 mt-3 flex gap-1">
          Hey! I&apos;m{" "}
          <span className="text-violet-400 transform transition-all cursor-cell flex hover:-rotate-6 hover:text-violet-600">
            {process.env.userName}
          </span>
        </h1>
        <p className="dark:text-gray-300 mt-2 text-lg max-w-lg">
          I&apos;m an idiot from Canada and I write code in{" "}
          <button
            onClick={() => open("https://python.org")}
            className="dark:text-blue-300 text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer active:translate-y-[1px]"
          >
            Python
          </button>{" "}
          and play{" "}
          <button
            onClick={() => open("https://en.wikipedia.org/wiki/Video_game")}
            className="dark:text-blue-300 dark:hover:text-blue-400 text-blue-600 hover:text-blue-700  cursor-pointer active:translate-y-[1px]"
          >
            video games
          </button>{" "}
          in my free time
        </p>
      </div>
    </div>
  );
}
