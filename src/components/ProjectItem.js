export default function ProjectItem({ title, projectUrl, year, description, technologies }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-2">
        <a href={projectUrl} className="hover:text-gray-600">{title}</a>
        <span className="text-base font-normal text-gray-600 ml-2">· {year}</span>
      </h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="text-sm text-gray-500 space-x-4">
        {technologies.map((tech, index) => (
          <span key={index} className="mono">{tech}</span>
        ))}
      </div>
    </div>
  );
}
