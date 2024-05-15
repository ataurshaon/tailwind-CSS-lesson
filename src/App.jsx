

function App() {

  return (
    <>
      {/* <div className="text-3xl font-bold underline">
        <h1>Hello World!</h1>
      </div>
      <div>
        <p className="text-red-500 text-3xl text-left">Tom</p>
        <p className="text-gray-400 text-lg text-center">Jerry</p>
        <p className="text-blue-900 text-xs text-right">Max</p>
      </div>

      <div className="bg-red-500 bg-opacity-50 min-w-40 min-h-60">
        Tailwind CSS is great.
      </div>
      <div className="bg-blue-200 w-1/2 h-32">
        Tailwind CSS is awesome.
      </div>
      <div className="bg-gray-900 text-white m-4 p-8">
        Tailwind CSS is fantastic.
      </div> */}

      {/* background image use */}
      {/* <div
      className="bg-[url('https://picsum.photos/seed/picsum/200/300')] bg-center bg-no-repeat bg-cover h-screen">
        
      </div> */}

        {/* gradient use */}
      {/* <div className="bg-gradient-to-r from-blue-300 via-purple-500 to-pink-300">
        We are learning gradient.
      </div> */}

      {/* using flex */}
      {/* <div className="flex">
        <div className="flex-1 border border-green-800">First div 1</div>
        <div className="flex-2 border border-pink-700">Second div 2</div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>First</div>
        <div>Second</div>
      </div> */}

      {/* using grid */}
      {/* <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          Grid item 1
        </div>
        <div>
          Grid item 2
        </div>
      </div> */}

      {/* respnsive design */}
      <div className="bg-blue-300 sm:bg-red-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-purple-500">
        We are responsiveness!!!
      </div>

      {/* testing custom colors */}
      <div className="bg-primary text-customColor-500 font-custom">
        I am testing custom color.
      </div>

      <p className="mt-2 ml-1 tablet:flex">Responsive customization</p>
    </>
  )
}

export default App
