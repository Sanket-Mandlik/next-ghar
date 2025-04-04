const Simplify = () => {
    return (
      <section id="simplify" className="py-20 w-4/5 mx-auto px-5 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">How We Simplify Your Furnishing Experience</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">After-Sales Support</h3>
              <p className="mt-2 text-gray-600">We ensure your furniture is maintained with comprehensive warranty support.</p>
            </div>
            <img src="/assets/simplify-step1.jpg" alt="Simplify Process" className="rounded-lg shadow-md"/>
          </div>
        </div>
      </section>
    );
  };
  
  export default Simplify;
  