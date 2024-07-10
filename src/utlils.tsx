interface IParamsObject {
  key: string;
  value: string;
}

export const callApi = async (action: string, params: IParamsObject[]) => {
  const BASE_URL =
    "https://script.google.com/macros/s/AKfycbxHwj0SCCLWaJCskJtBvO7S3qKvdAxyNr60npJuFT06rPB8ouYJfI2rEzONcJURmtI2yw/exec";

  fetch(
    `${BASE_URL}?path=Sheet1&action=${action}&${params
      .map((param) => `${param.key}=${param.value}`)
      .join("&")}`
  );
};

export const dataMataKuliah = [
  {
    KodeMataKuliah: "CIF62004",
    Nama: "Algoritma dan Struktur Data",
    JumlahSks: 4,
    TahunAkademik: "2020/2021-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62005",
    Nama: "Aljabar Linear",
    JumlahSks: 2,
    TahunAkademik: "2020/2021-Genap",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "CIF62016",
    Nama: "Analisis dan Perancangan Sistem",
    JumlahSks: 5,
    TahunAkademik: "2021/2022-Genap",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "COM60011",
    Nama: "Arsitektur dan Organisasi Komputer",
    JumlahSks: 3,
    TahunAkademik: "2020/2021-Ganjil",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "MPK60007",
    Nama: "Bahasa Indonesia",
    JumlahSks: 2,
    TahunAkademik: "2021/2022-Genap",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "UBU60004",
    Nama: "Bahasa Inggris",
    JumlahSks: 2,
    TahunAkademik: "2020/2021-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF61009",
    Nama: "Basis Data",
    JumlahSks: 4,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF61008",
    Nama: "Desain dan Analisis Algoritma",
    JumlahSks: 3,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62037",
    Nama: "Enterprise Frameworks",
    JumlahSks: 3,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "COM60052",
    Nama: "Etika Profesi",
    JumlahSks: 2,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "CIF62046",
    Nama: "Evaluasi Antarmuka dan Pengalaman Pengguna",
    JumlahSks: 3,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "B",
  },
  {
    KodeMataKuliah: "CIF61039",
    Nama: "Grafika Komputer",
    JumlahSks: 3,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF61012",
    Nama: "Interaksi Manusia dan Komputer",
    JumlahSks: 3,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "CIF61007",
    Nama: "Jaringan Komputer",
    JumlahSks: 4,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "CIF61020",
    Nama: "Jaringan Saraf Tiruan",
    JumlahSks: 4,
    TahunAkademik: "2022/2023-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF61001",
    Nama: "Kalkulus",
    JumlahSks: 3,
    TahunAkademik: "2020/2021-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62013",
    Nama: "Keamanan Informasi",
    JumlahSks: 4,
    TahunAkademik: "2021/2022-Genap",
    Nilai: "B",
  },
  {
    KodeMataKuliah: "CIF61011",
    Nama: "Kecerdasan Buatan",
    JumlahSks: 3,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "MPK60006",
    Nama: "Kewarganegaraan",
    JumlahSks: 2,
    TahunAkademik: "2020/2021-Genap",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "UBU60003",
    Nama: "Kewirausahaan",
    JumlahSks: 2,
    TahunAkademik: "2020/2021-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62068",
    Nama: "Kewirausahaan Teknologi Informasi",
    JumlahSks: 3,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "COM60903",
    Nama: "MB Diseminasi Merdeka Belajar",
    JumlahSks: 1,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "COM60910",
    Nama: "MB Magang Industri",
    JumlahSks: 6,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "COM60901",
    Nama: "MB Proyek Teknologi Informasi",
    JumlahSks: 3,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF61067",
    Nama: "Manajemen Industri Teknologi Informasi",
    JumlahSks: 3,
    TahunAkademik: "2023/2024-Ganjil",
    Nilai: "K",
  },
  {
    KodeMataKuliah: "COM60015",
    Nama: "Matematika Komputasi",
    JumlahSks: 3,
    TahunAkademik: "2020/2021-Ganjil",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "CIF61010",
    Nama: "Metode Numerik",
    JumlahSks: 3,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "COM60051",
    Nama: "Metodologi Penelitian dan Penulisan Ilmiah",
    JumlahSks: 3,
    TahunAkademik: "2022/2023-Ganjil",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "MPK60008",
    Nama: "Pancasila",
    JumlahSks: 2,
    TahunAkademik: "2021/2022-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62003",
    Nama: "Pemrograman Berorientasi Obyek",
    JumlahSks: 5,
    TahunAkademik: "2020/2021-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "COM60014",
    Nama: "Pemrograman Dasar",
    JumlahSks: 4,
    TahunAkademik: "2020/2021-Ganjil",
    Nilai: "B",
  },
  {
    KodeMataKuliah: "CIF61018",
    Nama: "Pemrograman Sistem Interaktif",
    JumlahSks: 4,
    TahunAkademik: "2022/2023-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62015",
    Nama: "Pemrograman Web",
    JumlahSks: 4,
    TahunAkademik: "2021/2022-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "UBU60005",
    Nama: "Pengabdian Kepada Masyarakat (PKM)",
    JumlahSks: 4,
    TahunAkademik: "2022/2023-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "COM60016",
    Nama: "Pengantar Keilmuan Komputer",
    JumlahSks: 2,
    TahunAkademik: "2020/2021-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62017",
    Nama: "Pengantar Pembelajaran Mesin",
    JumlahSks: 4,
    TahunAkademik: "2021/2022-Genap",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "CIF61040",
    Nama: "Perancangan Pengalaman Pengguna",
    JumlahSks: 3,
    TahunAkademik: "2022/2023-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "COM60061",
    Nama: "Praktik Kerja Lapangan",
    JumlahSks: 4,
    TahunAkademik: "2022/2023-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF61019",
    Nama: "Rekayasa Perangkat Lunak",
    JumlahSks: 4,
    TahunAkademik: "2022/2023-Ganjil",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62014",
    Nama: "Sistem Multimedia",
    JumlahSks: 3,
    TahunAkademik: "2021/2022-Genap",
    Nilai: "A",
  },
  {
    KodeMataKuliah: "CIF62002",
    Nama: "Sistem Operasi",
    JumlahSks: 4,
    TahunAkademik: "2020/2021-Genap",
    Nilai: "B",
  },
  {
    KodeMataKuliah: "CIF62006",
    Nama: "Statistika dan Teori Peluang",
    JumlahSks: 3,
    TahunAkademik: "2020/2021-Genap",
    Nilai: "B+",
  },
  {
    KodeMataKuliah: "UBU60001",
    Nama: "Tugas Akhir/ Skripsi",
    JumlahSks: 6,
    TahunAkademik: "2023/2024-Ganjil",
    Nilai: "K",
  },
];
