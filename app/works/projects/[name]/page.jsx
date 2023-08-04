import React from "react";
import { clients } from "@/app/constants";

const ProjectPage = ({ params }) => {
  return (
    <div>
      <h1 className="text-red-600">Project Page</h1>
      <h1 className="text-red-600">{params}</h1>
    </div>
  );
};

export default ProjectPage;
