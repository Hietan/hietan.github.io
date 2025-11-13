import { DataTable } from "@/type/table";

const dataEducation: DataTable = {
  header: [
    "Period",
    "Degree",
    "Institution"
  ],
  body: [
    ["2020-04 ~ 2024-03", "Bachelor", "Doshisha University"],
    ["2024-04 ~ 2025-09", "Master", "Nara Institute of Science and Technology (NAIST)"],
    [
      <strong>2025-09 ~ Present</strong>,
      <strong>Doctor</strong>,
      <strong>Nara Institute of Science and Technology (NAIST)</strong>
    ]
  ]
};

export default dataEducation;