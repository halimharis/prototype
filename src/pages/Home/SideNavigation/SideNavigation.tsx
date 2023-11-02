import NavigationLink from "./NavigationLink";

const navigation = [
  { title: "PRESENSI ONLINE", description: "Online Presence", id: "Presensi" },
  {
    title: "KARTU RENCANA STUDI",
    description: "Course Selection Sheet",
    id: "KRS",
  },
  { title: "KARTU HASIL STUDI", description: "Course Grades", id: "KHS" },
  {
    title: "JADWAL KULIAH",
    description: "Course Schedule",
    id: "Jadwal Kuliah",
  },
  { title: "JADWAL UJIAN", description: "Exam Schedule", id: "Jadwal Ujian" },
  { title: "ABSENSI", description: "Attendace", id: "Absensi" },
  {
    title: "REKAP HASIL STUDI",
    description: "Summary of Course Grades",
    id: "Rekap Hasil Studi",
  },
  { title: "TUGAS AKHIR", description: "Thesis", id: "Tugas Akhir" },
];

interface ISideNavigation {
  active: string;
  setActive: (name: string) => void;
}

export default function SideNavigation({ active, setActive }: ISideNavigation) {
  return (
    <div className="w-2/5">
      {navigation.map(({ title, description, id }) => (
        <NavigationLink
          key={title}
          title={title}
          description={description}
          active={active === id}
          setActive={() => setActive(id)}
        />
      ))}
    </div>
  );
}
