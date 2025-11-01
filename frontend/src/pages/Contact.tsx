const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-gray-600">
          Ada pertanyaan, saran, atau butuh bantuan? Tim kami siap membantu
          Anda.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">
            Kirim Pesan
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alamat Email
              </label>
              <input
                type="email"
                placeholder="email@contoh.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pesan
              </label>
              <textarea
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-700 cursor-pointer text-white py-3 rounded-md font-semibold shadow-md transition duration-200"
            >
              Kirim Pesan
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-green-800 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
          <ul className="space-y-4 text-gray-100">
            <li>
              <span className="font-semibold">📍 Alamat:</span>
              <p>Jl. Teknologi No. 88, Jakarta, Indonesia</p>
            </li>
            <li>
              <span className="font-semibold">📞 Telepon:</span>
              <p>+62 812 3456 7890</p>
            </li>
            <li>
              <span className="font-semibold">✉️ Email:</span>
              <p>support@techstore.id</p>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white text-green-700 p-2 rounded-full hover:bg-green-100 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bg-white text-green-700 p-2 rounded-full hover:bg-green-100 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="bg-white text-green-700 p-2 rounded-full hover:bg-green-100 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
