import React from "react";

const ProjectPage = ({ params }) => {
  return (
    <div>
      <h1 className="text-red-600">Project Page</h1>
      <h1 className="text-red-600">{params.id}</h1>
    </div>
  );
};

export default ProjectPage;
