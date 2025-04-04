
const HeroLabel = () => {
    return (
      <div className="flex flex-col bg-[#F5F1EB] md:flex-row w-4/5 mx-auto rounded-lg shadow-lg overflow-hidden">
        {/* Left Section (Gradient Background) */}
        <div className="flex-1 bg-gradient-to-r from-[#8B5E3C] w-4/5 to-[#D2A679] text-white p-6 flex flex-col justify-center items-center text-center">
          <div>
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="text-lg">Furniture Suppliers</p>
          </div>
          <div className="mt-6">
            <h2 className="text-4xl font-bold">15+</h2>
            <p className="text-lg">Years of Industry Experience</p>
          </div>
        </div>
  
        {/* Center Section (Text Content) */}
        <div className="flex-2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Who <span className="text-[#C29060]">We</span> Are
          </h2>
          <p className="mt-4 text-gray-600">
            At Company, we understand the challenges of creating exceptional
            spaces that blend elegance, quality, and functionality.
          </p>
          <p className="mt-4 text-gray-600">
            As one of the premier furniture solutions providers, we make it our
            mission to simplify the furnishing process, ensuring that every
            project is executed flawlessly from initial consultation to final
            installation.
          </p>
        </div>
  
        {/* Right Section (Image) */}
        <div
          className="flex-1 -mr-30 -mt-20 border-10 border-white bg-cover bg-center rounded-full overflow-hidden h-70"
          style={{
            backgroundImage: `url('/assets/image_1.jpeg')`,
          }}
        ></div>
      </div>
    );
  };
  
  export default HeroLabel;