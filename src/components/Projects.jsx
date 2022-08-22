import GithubBorder from './Icons/GithubBorder';
import OpenLink from './Icons/OpenLink';
import Folder from './Icons/Folder';

export default function Project({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 my-6 mt-28">
      {projects.map((project, index) => (
        <div className="w-80 p-6 rounded-lg bg-slate-500" key={index}>
          <div className="flex justify-between">
            <Folder />
            <div className="flex">
              <a className="mx-2" href={project.repository}>
                <GithubBorder />
              </a>
              <a className="mx-2" href={project.preview}>
                <OpenLink />
              </a>
            </div>
          </div>
          <div className="h-36">
            <p className="my-3 text-xl">{project.title}</p>
            <p>{project.description}</p>
          </div>
          <div className="flex mt-3">
            {project.tags.map((tag) => (
              <span className="text-sky-500 mx-1 font-medium" key={tag.id}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
