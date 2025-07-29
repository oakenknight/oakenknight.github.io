export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`prose mb-16 ${className}`}>
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
}
