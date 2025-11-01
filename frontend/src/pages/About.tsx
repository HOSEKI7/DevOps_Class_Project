const About = () => {
  return (
    <section className="min-h-screen text-gray-800 flex flex-col items-center py-16 px-6">
      {/* Header */}
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Tentang Kami
        </h1>
        <p className="text-lg text-gray-600">
          Kami adalah e-commerce Hoseki Shops yang berkomitmen menghadirkan
          produk teknologi berkualitas tinggi dan original. Misi kami adalah
          menyediakan pengalaman berbelanja yang mudah, aman, dan memuaskan bagi
          semua pelanggan kami.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Bergabung Bersama Kami
        </h3>
        <p className="text-gray-600 mb-6">
          Jadilah bagian dari perjalanan kami menuju masa depan yang lebih
          hijau.
        </p>
        <button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-200">
          Mulai Belanja Sekarang
        </button>
      </div>
    </section>
  );
};

export default About;
