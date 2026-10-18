export interface CareerEntry {
  role: string;
  organisation: string;
  period: string;
  responsibilities: string;
}

export interface EducationEntry {
  qualification: string;
  institution: string;
  period: string;
}

export const careerHistory: CareerEntry[] = [
  {
    role: "Senior Boarding Executive · Facilities Operations",
    organisation: "Hwa Chong Institution Boarding School",
    period: "Sep 2023 — Present",
    responsibilities: "Lead facilities operations, building maintenance, vendor and contractor management, tender and ITQ administration, fire-safety responsibilities and facilities improvement planning across a residential environment.",
  },
  {
    role: "Boarding Executive",
    organisation: "Hwa Chong Institution Boarding School",
    period: "Oct 2018 — Sep 2023",
    responsibilities: "Managed day-to-day facilities operations, maintenance and repairs while coordinating service providers, tenders and stakeholders to support a reliable residential environment.",
  },
  {
    role: "Project Director",
    organisation: "T.N.K. Design Contractor Pte Ltd",
    period: "Mar 2013 — Oct 2018",
    responsibilities: "Led end-to-end delivery work through client, consultant, contractor and vendor coordination, planning, quotations, site coordination, resource management and issue resolution.",
  },
  {
    role: "Project Manager",
    organisation: "T.N.K. Design Contractor Pte Ltd",
    period: "Sep 2010 — Mar 2013",
    responsibilities: "Coordinated stakeholders, quotations, site supervision, regulatory submissions and client communication to support safe, efficient work delivery.",
  },
  {
    role: "Quality Assurance Intern",
    organisation: "Kinergy Group Pte. Ltd.",
    period: "Jun 2014 — Aug 2014",
    responsibilities: "Supported inspection activities, checked spare parts and prepared quality-assurance reports before delivery or installation.",
  },
];

export const educationHistory: EducationEntry[] = [
  { qualification: "Bachelor's Degree, Facilities Management", institution: "Singapore University of Social Sciences", period: "Jan 2020 — Aug 2027" },
  { qualification: "Diploma, Mechatronics Engineering", institution: "Nanyang Polytechnic", period: "Apr 2011 — Oct 2014" },
  { qualification: "Nitec, Building Services Technology", institution: "Institute of Technical Education", period: "Jan 2005 — Dec 2006" },
];
