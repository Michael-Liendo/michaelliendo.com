/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('/api/projects');

  if (res.ok) {
    const projects = await res.json();

    return {
      projects: projects as unknown[],
    };
  }

  return {
    projects: [],
  };
}
