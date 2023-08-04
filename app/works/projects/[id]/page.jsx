import React from "react";

const ProjectPage = ({ params }) => {
  return (
    <div>
      <h1 className="text-red-600">Project Page</h1>
      <h1 className="text-red-600">{params.id}</h1>
      <img src={params.logo} alt={params.title} />
      <p>{params.date}</p>
      <h2>{params.clientName}</h2>
      <h3>{params.scope}</h3>
    </div>
  );
};

export default ProjectPage;
