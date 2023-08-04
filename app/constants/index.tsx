export type clients = {
  id: string;
  logo: string;
  title: string;
  date: string;
  clientName: string;
  scope: string;
  deliverables: string;
  cover: string;
  color: string;
};
export const clients = [
  {
    id: "Socpa",
    logo: "../../static/clients/name-logo.svg",
    title: "Socpa Project",
    date: "19-Mar-2022",
    clientName: "client name",
    scope: "Books",
    deliverables: "file1, file2",
    cover: "/static/projects/name/name-cover.webp",
    color: "bg-gradient-to-bl from-[#165691]/70",
  },
  {
    id: "RSY",
    logo: "../../static/clients/name2-logo.svg",
    title: "RSY Project",
    date: "19-Mar-2022",
    clientName: "client name2",
    scope: "Video",
    deliverables: "file1, file2",
    cover: "/static/projects/name2/name2-cover.webp",
    color: "bg-gradient-to-bl from-[#165691]/70",
  },
];
