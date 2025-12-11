import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-[80vw] min-h-screen bg-white text-gray-800 m-auto mt-10">
      {/* Hero Section */}
      <section className="w-[80vw] h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')" }}>
        <div className="bg-black/70 w-[80vw] h-full p-10  flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-wide" style={{fontFamily: '"Pacifico", cursive'}}>About Us</h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4" style={{fontFamily : "Ubuntu"}}>Crafting Exceptional Culinary Experiences</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl  text-gray-900 text-center" style={{fontFamily:"Ubuntu"}}>Our Philosophy</h2>
          <p className="text-lg text-gray-600 mt-6 leading-relaxed text-center max-w-3xl mx-auto">
            We believe exceptional food transforms ordinary moments into memorable experiences. Our dishes are crafted
            with precision, passion, and the finest ingredients, bringing together culinary artistry and modern
            innovation.
          </p>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            alt="Journey"
            className="rounded-3xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              What began as a small kitchen experiment evolved into a vision to redefine modern dining. Every recipe,
              every plate, and every detail reflects our dedication to flavor, creativity, and unmatched quality.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Today, we proudly deliver experiences that go beyond food — moments of joy, comfort, and connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">Meet Our Culinary Masters</h2>
        <p className="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
          Passionate, skilled, and dedicated — our team brings life to every dish.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mt-14">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={`https://images.unsplash.com/photo-1557862921-37829c790f19?random=${item}`}
                alt="Chef"
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Chef {item}</h3>
              <p className="text-gray-500 mt-1">Culinary Specialist</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Our Commitment to Quality</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14 text-center">
            {["Handpicked Ingredients", "Strict Hygiene", "Premium Packaging", "Consistent Taste"].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm shadow-md"
              >
                <h3 className="text-xl font-medium">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
