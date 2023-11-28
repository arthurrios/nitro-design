export default function Flash() {
  return (
    <div className="bg-gradient-to-t from-marine-600 to-marine-500 h-screen text-mirage-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center px-6 py-12">
        <div className="space-y-4">
          <span className="text-xl leading-heading font-bold">
            Javascript Fundamentals
          </span>

          <div className="flex items-center gap-3">
            <div className="h-3 flex-1 bg-marine-800 rounded-md">
              <div className="h-3 rounded-md bg-marine-300 w-3/4"></div>
            </div>
            <span className="text-sm font-bold">8/12</span>
          </div>
        </div>
        <div className="relative mt-20">
          <div className="rounded-lg bg-mirage-50 py-6 px-5 mx-6 z-20">
            <p className="text-smoke-950 leading-base text-center min-h-[416px] flex justify-center items-center">
              Method used to traverse an array and create a new array from the
              original with possible modifications.
            </p>
          </div>

          <div className="z-10 rounded-lg bg-mirage-50/60 mx-6 absolute left-6 right-6 h-20 -bottom-4">
            asd
          </div>
        </div>
      </div>
      <button className="bg-mirage-50 text-marine-500 py-8 w-full font-bold uppercase hover:bg-mirage-50/90">
        Reveal answer
      </button>
    </div>
  )
}
