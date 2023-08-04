import React from "react";
import { clients } from "@/app/constants";
import Link from "next/link";

const projects = () => {
  return (
    <div>
      <ul>
        {clients.map((client) => (
          <li key={client.id} className="mb-10">
            <Link href={`/works/projects/${client.id}`}>
              <h1 className="text-red-600">{client.title}</h1>
              <img src={client.logo} alt={client.title} />
              <p>{client.date}</p>
              <h2>{client.clientName}</h2>
              <h3>{client.scope}</h3>
              <h3>{client.deliverables}</h3>
              <img src={client.cover} alt={client.clientName} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default projects;
