export default function WorkItem({ title, company, companyUrl, period, description }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-2">
        {title}
        <span className="text-base font-normal text-gray-600 ml-2">
          · <a href={companyUrl} className="link-subtle">{company}</a> · {period}
        </span>
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
