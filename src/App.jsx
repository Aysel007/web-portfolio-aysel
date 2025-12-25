import Aurora from "./components/Aurora";
import TextType from "./components/TextType";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen relative text-white">
      {/* Background Aurora */}
      <div className="fixed inset-0 z-0 bg-black pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* HERO SECTION */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-10 grid-cols-1 min-h-[90vh]">
          {/* TEXT CONTENT */}
          <div className="animate__animated animate__fadeInUp animate__delay-3s order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800/80 backdrop-blur-sm w-fit p-4 rounded-2xl border border-zinc-700">
              <q className="italic text-sm sm:text-base">
                Ngoding itu sangatlah menyenangkan.😁
              </q>
            </div>
            {/* Responsif Font Size */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl/tight font-bold mb-6">
              <TextType
                text={["HI, Saya Aysel", "HI, Saya Aysel"]}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>
            <p className="text-sm sm:text-base/loose mb-6 opacity-60">
              Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
              terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
              serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih
              dari 3 Tahun untuk semua Bidang.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:gap-4 gap-3">
              <a
                href="#"
                className="bg-violet-700 w-full sm:w-auto text-center p-4 rounded-2xl hover:bg-violet-600 transition-all shadow-lg shadow-violet-700/30"
              >
                Download CV <i className="ri-download-line ri-lg ml-2"></i>
              </a>
              <a
                href="#project"
                className="bg-zinc-700 w-full sm:w-auto text-center p-4 rounded-2xl hover:bg-zinc-600 transition-all"
              >
                Lihat Project <i className="ri-arrow-down-line ri-lg ml-2"></i>
              </a>
            </div>
          </div>

          {/* IMAGE COMPOSITION */}
          <div className="relative w-full flex justify-center items-center order-1 md:order-2 perspective-1000 py-10 md:py-0">
            {/* 1. LAYER BELAKANG: ORBIT RINGS & GLOW */}
            <div className="absolute inset-0 flex items-center justify-center -z-20">
              {/* Glow Pusat */}
              <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] bg-violet-600/30 rounded-full blur-[60px] sm:blur-[80px]"></div>

              {/* FIX 2: Orbit Ring  */}
              {/* Orbit Ring 1 (Besar Tipis) */}
              <div className="absolute w-[85vw] h-[85vw] max-w-[380px] max-h-[380px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>

              {/* Orbit Ring 2 */}
              <div className="absolute w-[70vw] h-[70vw] max-w-[320px] max-h-[320px] border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>

            {/* 2. LAYER TENGAH: GHOST ICONS */}

            {/* HTML5 */}
            <div className="absolute -top-5 -left-2 sm:-top-10 sm:-left-10 text-5xl sm:text-7xl text-white/5 -rotate-45 -z-10 animate-pulse delay-300">
              <i className="ri-html5-fill"></i>
            </div>

            {/* CSS3 */}
            <div className="absolute bottom-5 -left-0 sm:bottom-10 sm:-left-5 text-4xl sm:text-6xl text-white/5 rotate-12 -z-10 animate-pulse delay-700">
              <i className="ri-css3-fill"></i>
            </div>

            {/* Bootstrap */}
            <div className="absolute -bottom-5 right-5 sm:right-10 text-5xl sm:text-7xl text-white/5 -rotate-12 -z-10 animate-pulse delay-500">
              <i className="ri-bootstrap-fill"></i>
            </div>

            {/* Database */}
            <div className="absolute top-0 right-0 text-4xl sm:text-6xl text-white/5 rotate-45 -z-10 animate-pulse">
              <i className="ri-database-2-fill"></i>
            </div>

            {/* Git */}
            <div className="absolute top-1/2 -left-4 sm:-left-12 text-3xl sm:text-5xl text-white/5 -rotate-90 -z-10 animate-pulse delay-1000">
              <i className="ri-git-merge-fill"></i>
            </div>

            {/* Code Box */}
            <div className="absolute top-1/3 -right-4 sm:-right-10 text-3xl sm:text-5xl text-white/5 rotate-90 -z-10 animate-pulse delay-200">
              <i className="ri-code-box-fill"></i>
            </div>

            {/* 3. LAYER DEPAN: FLOATING ICONS */}

            {/* React */}
            <div className="absolute top-0 left-0 sm:top-4 sm:-left-4 animate-float-slow z-30">
              <div className="bg-zinc-900/80 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <i className="ri-reactjs-line text-2xl sm:text-4xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"></i>
              </div>
            </div>

            {/* Code/Slash */}
            <div className="absolute top-1/2 -right-0 sm:-right-8 animate-float-medium z-30">
              <div className="bg-zinc-900/80 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                <i className="ri-code-s-slash-line text-xl sm:text-3xl text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]"></i>
              </div>
            </div>

            {/* JS */}
            <div className="absolute bottom-6 left-0 sm:-left-2 animate-float-fast z-30">
              <div className="bg-zinc-900/80 backdrop-blur-md p-2 sm:p-3 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                <span className="font-bold text-yellow-400 text-base sm:text-xl font-mono drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                  JS
                </span>
              </div>
            </div>

            {/* 4. FOTO UTAMA */}
            <img
              src={DataImage.HeroImage}
              alt="Aysel Ghazwan"
              className="relative z-10 w-[280px] sm:w-full sm:max-w-[350px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] mask-image-b-gradient"
              loading="lazy"
            />
          </div>
        </div>
        {/* End Hero */}

        {/* ABOUT */}
        <div className="about mt-20 sm:mt-32 py-10" id="about">
          <div
            className="z-index 99 xl:w-2/3 lg:w-3/4 w-full mx-auto p-6 sm:p-7 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-2xl shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-16 h-16 object-cover rounded-full mb-6 sm:hidden border-2 border-violet-500 mx-auto"
              loading="lazy"
            />
            <p className="text-sm sm:text-base/loose mb-10 text-center sm:text-left">
              Hi, perkenalkan saya Aysel Ghazwan Al Jauzi, seorang Web Developer
              dan Designer untuk UI/UX Design maupun Product Digital, Saya
              percaya bahwa desain dan fungsionalitas harus berjalan beriringan,
              sehingga setiap proyek yang saya kembangkan tidak hanya terlihat
              menarik tetapi juga memberikan pengalaman pengguna yang optimal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
              <img
                src={DataImage.HeroImage}
                alt="Image"
                className="w-16 h-16 object-cover rounded-full sm:block hidden border-2 border-violet-500"
                loading="lazy"
              />
              <div className="flex items-center gap-8">
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl mb-1 font-bold">
                    2<span className="text-violet-500">+</span>
                  </h1>
                  <p className="text-xs sm:text-sm opacity-70">
                    Proyek Selesai
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl mb-1 font-bold">
                    3<span className="text-violet-500">+</span>
                  </h1>
                  <p className="text-xs sm:text-sm opacity-70">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About */}

        {/* TOOLS */}
        <div className="tools mt-20 sm:mt-32">
          <h1
            className="text-3xl sm:text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools Yang Dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-sm sm:text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Berikut ini beberapa tools yang saya biasa pakai untuk membuat
            website ataupun design
          </p>
          <div className="tools-box mt-10 sm:mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-700 bg-zinc-800/50 rounded-xl hover:bg-zinc-800 hover:border-violet-500 transition-all group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-10 sm:w-12 bg-zinc-900 p-2 rounded-lg group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    {tool.nama}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Tools */}

        {/* PROJECT */}
        <div className="project mt-20 sm:mt-32 py-10" id="project">
          <h1
            className="text-center text-3xl sm:text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Project
          </h1>
          <p
            className="text-sm sm:text-base/loose text-center opacity-50 px-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Berikut ini beberapa project yang telah saya buat.
          </p>
          <div className="project-box mt-10 sm:mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-zinc-800/80 border border-zinc-700 rounded-2xl hover:border-violet-500 transition-all group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={proyek.gambar}
                    alt="proyek image"
                    className="w-full group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h1 className="text-xl sm:text-2xl font-bold mb-2">
                    {proyek.nama}
                  </h1>
                  <p className="text-xs sm:text-sm leading-relaxed mb-4 opacity-70 line-clamp-3">
                    {proyek.desk}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyek.tools.map((tool, index) => (
                      <span
                        className="text-[10px] sm:text-xs py-1 px-3 border border-zinc-600 bg-zinc-700/50 rounded-full font-semibold"
                        key={index}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="bg-violet-700 w-full py-2 rounded-lg block border border-violet-600 hover:bg-violet-600 transition-colors font-semibold text-sm sm:text-base"
                    >
                      Lihat Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Project */}

        {/* CONTACT */}
        <div className="kotak mt-20 sm:mt-32 pb-20" id="contact">
          <h1
            className="text-3xl sm:text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Kontak
          </h1>
          <p
            className="text-sm sm:text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Mari Terhubung Dengan Saya.
          </p>
          {/* FIX 3: Padding Form disesuaikan (p-6 di HP, p-10 di Desktop) */}
          <form
            action="https://formsubmit.co/ayselghazwan635@gmail.com"
            method="POST"
            className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 p-6 sm:p-10 sm:w-[500px] w-full mx-auto rounded-2xl shadow-2xl"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-zinc-300 text-sm sm:text-base">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukan Nama..."
                  className="bg-zinc-900/50 border border-zinc-600 p-3 rounded-lg focus:outline-none focus:border-violet-500 transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-zinc-300 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukan Email..."
                  className="bg-zinc-900/50 border border-zinc-600 p-3 rounded-lg focus:outline-none focus:border-violet-500 transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="pesan"
                  className="font-semibold text-zinc-300 text-sm sm:text-base"
                >
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="5"
                  placeholder="Tulis pesan anda disini..."
                  className="bg-zinc-900/50 border border-zinc-600 p-3 rounded-lg focus:outline-none focus:border-violet-500 transition-colors resize-none text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              <div className="text-center mt-2">
                <button
                  type="submit"
                  className="bg-violet-700 w-full p-3 rounded-lg cursor-pointer border border-violet-600 hover:bg-violet-600 font-bold tracking-wide shadow-lg shadow-violet-700/20 transition-all text-sm sm:text-base"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* End Contact */}

        {/* Footer */}
        <footer className="text-center py-10 opacity-50 text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Aysel Ghazwan. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
