import { getProjects } from '../../lib/notion';

import GithubIcon from '~icons/mdi/github.jsx';
import LinkIcon from '~icons/mdi/link.jsx';
import FolderIcon from '~icons/mdi/folder-outline.jsx';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { useState } from 'react';

export default function ProjectPage({ projects }) {
  const [projectState, setProjectState] = useState(projects);
  function filterHandler(e) {
    setProjectState(() => {
      if (e.target.value.length > 0)
        return projects.filter(
          (project) =>
            project.title
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(e.target.value.toLowerCase()),
        );
      return projects;
    });
  }

  return (
    <>
      <Layout title="Project | Michael Liendo">
        <Card className="p-6 h-[80vh] md:h-[60vh] overflow-y-auto">
          <div>
            <input
              type="text"
              className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search anything..."
              onChange={filterHandler}
            />
          </div>
          <div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-x-24 gap-y-16 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 mt-16">
                {projectState?.map((project, index) => (
                  <div
                    className="flex flex-col content-between w-90 p-6 rounded-lg bg-slate-600 bg-opacity-50"
                    key={index}
                  >
                    <div className="flex justify-between">
                      <FolderIcon className="text-4xl" />
                      <div className="flex">
                        <a
                          title={project.title}
                          aria-label="Project Repository"
                          className="transition duration-300 hover:-translate-y-1 mx-2"
                          target="_blank"
                          rel="noreferrer"
                          href={project.repository}
                        >
                          <GithubIcon className="text-4xl" />
                        </a>
                        <a
                          title={project.title}
                          aria-label="Project Preview"
                          className="transition duration-300 hover:-translate-y-1 mx-2"
                          target="_blank"
                          rel="noreferrer"
                          href={project.preview}
                        >
                          <LinkIcon className="text-4xl" />
                        </a>
                      </div>
                    </div>
                    <div className="">
                      <p className="my-3 text-xl">{project.title}</p>
                      <p className="text-indigo-200">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap mt-3">
                      {project.tags.map((tag) => (
                        <span
                          className="text-sky-400 mx-1 font-medium"
                          key={tag.id}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}
