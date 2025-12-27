import Aurora from "./components/Aurora";
import TextType from "./components/TextType";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    // wrapper utama
    <div className="overflow-x-hidden w-full min-h-screen relative text-white selection:bg-violet-500 selection:text-white">
      {/* Background Aurora */}
      {/* FIX 2: Ubah z-0 menjadi z-[-1] agar benar-benar di belakang layer aplikasi */}
      <div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* HERO SECTION - ID CARD STYLE */}
        <div className="hero flex items-center justify-center min-h-screen sm:pt-28 pb-10 ">
          {/* --- KTP / ID CARD CONTAINER --- */}
          <div
            className="relative w-full max-w-6xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] md:p-12 sm:p-6  overflow-hidden shadow-2xl group"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Dekorasi Efek Shine pada Card */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-[3rem]"></div>
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              {/* KOLOM KIRI: TEXT CONTENT */}
              <div className="order-2 md:order-1 text-left">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 bg-zinc-800/60 backdrop-blur-md w-full sm:w-fit p-2 sm:p-3 px-4 sm:px-5 rounded-full border border-zinc-700/50 shadow-inner mx-auto sm:mx-0">
                  <q className="italic text-xs sm:text-sm text-center text-zinc-300">
                    Ngoding itu sangatlah menyenangkan.😁
                  </q>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl/tight font-bold mb-6 tracking-tight text-center sm:text-left">
                  <TextType
                    text={["HI, Saya Aysel", "Web Developer"]}
                    typingSpeed={80}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </h1>

                <p className="text-sm sm:text-base/loose text-center mb-8 opacity-70 text-zinc-300 max-w-md">
                  Saya mempunyai ketertarikan dalam bidang Programming dan
                  Designer, terutama pada pembuatan Website.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="#"
                    className="bg-violet-600 w-full sm:w-auto text-center px-8 py-3 rounded-xl hover:bg-violet-500 transition-all shadow-lg shadow-violet-600/20 font-semibold text-sm"
                  >
                    Download CV <i className="ri-download-line ml-2"></i>
                  </a>
                  <a
                    href="#project"
                    className="bg-zinc-800/50 w-full sm:w-auto text-center px-8 py-3 rounded-xl hover:bg-zinc-700 transition-all border border-zinc-700 text-sm font-medium"
                  >
                    Lihat Project <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </div>
              </div>

              {/* KOLOM KANAN: IMAGE WITH ORBIT */}
              <div className="relative w-full flex justify-center items-center order-1 md:order-2 py-10 md:py-0">
                {/* Container Orbit Utama */}
                <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex justify-center items-center">
                  {/* 1. LAYER TERLUAR: 10 ICON BAYANGAN (GHOST ICONS) */}
                  <div className="absolute inset-[-40px] animate-[spin_80s_linear_infinite] pointer-events-none opacity-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <i className="ri-database-2-line text-4xl text-zinc-400"></i>
                    </div>
                    <div className="absolute top-[15%] right-[15%]">
                      <i className="ri-code-box-line text-3xl text-zinc-400"></i>
                    </div>
                    <div className="absolute top-1/2 right-0 translate-x-1/2">
                      <i className="ri-cpu-line text-4xl text-zinc-400"></i>
                    </div>
                    <div className="absolute bottom-[15%] right-[15%]">
                      <i className="ri-terminal-box-line text-3xl text-zinc-400"></i>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <i className="ri-braces-line text-4xl text-zinc-400"></i>
                    </div>
                    <div className="absolute bottom-[15%] left-[15%]">
                      <i className="ri-bug-line text-3xl text-zinc-400"></i>
                    </div>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2">
                      <i className="ri-command-line text-4xl text-zinc-400"></i>
                    </div>
                    <div className="absolute top-[15%] left-[15%]">
                      <i className="ri-links-line text-3xl text-zinc-400"></i>
                    </div>
                    <div className="absolute top-1/3 left-10">
                      <i className="ri-window-line text-2xl text-zinc-400"></i>
                    </div>
                    <div className="absolute bottom-1/3 right-10">
                      <i className="ri-server-line text-2xl text-zinc-400"></i>
                    </div>
                  </div>

                  {/* 2. LAYER TENGAH: GARIS ORBIT DEKORASI */}
                  <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite] -z-10"></div>

                  {/* 3. MAIN IMAGE (FOTO) */}
                  <div className="relative z-10 group/img">
                    <div className="absolute -inset-1 bg-gradient-to-b from-violet-500/40 to-cyan-500/40 rounded-[2rem] blur-xl transition-all duration-500 group-hover/img:blur-2xl"></div>

                    <div className="relative rounded-[1.8rem] overflow-hidden border border-white/20 bg-zinc-900/80 p-1">
                      <img
                        src={DataImage.HeroImage}
                        alt="Aysel Ghazwan"
                        className="w-[180px] sm:w-[240px] rounded-[1.5rem] object-cover hover:scale-105 transition-transform duration-700 ease-in-out filter brightness-90 hover:brightness-100"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* 4. LAYER DEPAN: 6 COLORFUL ICONS (Tight Orbit) */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 animate-float-slow">
                    <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)] backdrop-blur-md">
                      <i className="ri-reactjs-line text-3xl text-cyan-400 animate-[spin_10s_linear_infinite]"></i>
                    </div>
                  </div>

                  <div className="absolute top-8 -right-4 z-20 animate-float-medium delay-200">
                    <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.3)] backdrop-blur-md">
                      <i className="ri-javascript-fill text-3xl text-yellow-400"></i>
                    </div>
                  </div>

                  <div className="absolute bottom-8 -right-4 z-20 animate-float-fast delay-500">
                    <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.3)] backdrop-blur-md">
                      <i className="ri-html5-fill text-3xl text-orange-500"></i>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 animate-float-slow delay-700">
                    <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md">
                      <i className="ri-css3-fill text-3xl text-blue-500"></i>
                    </div>
                  </div>

                  <div className="absolute bottom-8 -left-4 z-20 animate-float-medium delay-1000">
                    <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)] backdrop-blur-md">
                      <i className="ri-nodejs-fill text-3xl text-green-500"></i>
                    </div>
                  </div>

                  <div className="absolute top-8 -left-4 z-20 animate-float-fast delay-150">
                    <div className="bg-zinc-900/90 p-2.5 rounded-xl border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)] backdrop-blur-md">
                      <i className="ri-git-merge-fill text-3xl text-red-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              dan Designer untuk UI/UX Design, dengan majunya era digital, saya
              yakin bahwa web akan sangat dibutuhkan kedepanya
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
                    className="w-full"
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
      {/* FIX 3: Tag Penutup yang benar untuk Container dan Wrapper Utama */}
    </div>
  );
}

export default App;
