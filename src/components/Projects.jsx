import GithubBorder from './Icons/GithubBorder';
import OpenLink from './Icons/OpenLink';
import Folder from './Icons/Folder';

export default function Project({ projects }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-x-24 gap-y-16 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 mt-28">
        {projects.map((project, index) => (
          <div
            className="flex flex-col content-between w-90 p-6 rounded-lg bg-slate-600 bg-opacity-50"
            key={index}
          >
            <div className="flex justify-between">
              <Folder />
              <div className="flex">
                <a
                  title={project.title}
                  aria-label="Project Repository"
                  className="transition duration-300 hover:-translate-y-1 mx-2"
                  target="_blank"
                  rel="noreferrer"
                  href={project.repository}
                >
                  <GithubBorder />
                </a>
                <a
                  title={project.title}
                  aria-label="Project Preview"
                  className="transition duration-300 hover:-translate-y-1 mx-2"
                  target="_blank"
                  rel="noreferrer"
                  href={project.preview}
                >
                  <OpenLink />
                </a>
              </div>
            </div>
            <div className="">
              <p className="my-3 text-xl">{project.title}</p>
              <p className="text-indigo-200">{project.description}</p>
            </div>
            <div className="flex mt-3">
              {project.tags.map((tag) => (
                <span className="text-sky-400 mx-1 font-medium" key={tag.id}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
