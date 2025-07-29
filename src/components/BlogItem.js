import Link from 'next/link';

export default function BlogItem({ title, excerpt, date, readTime, tags, url, featured, external, links = [] }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Process excerpt with link placeholders
  const processExcerpt = (text, linkArray) => {
    if (!linkArray || linkArray.length === 0) {
      return text;
    }

    const parts = [];
    let currentText = text;
    
    // Sort links by index to process them in order
    const sortedLinks = linkArray.map((link, index) => ({ ...link, index }))
      .sort((a, b) => {
        const aPos = currentText.indexOf(`[${a.index}]`);
        const bPos = currentText.indexOf(`[${b.index}]`);
        return aPos - bPos;
      });

    let lastIndex = 0;
    
    sortedLinks.forEach((link, i) => {
      const placeholder = `[${link.index}]`;
      const placeholderIndex = currentText.indexOf(placeholder, lastIndex);
      
      if (placeholderIndex !== -1) {
        // Add text before the placeholder
        if (placeholderIndex > lastIndex) {
          parts.push(currentText.slice(lastIndex, placeholderIndex));
        }
        
        // Add the link component
        parts.push(
          <a
            key={`link-${link.index}`}
            href={link.url}
            className="text-blue-600 hover:text-blue-800 border-b border-blue-600 hover:border-blue-800 transition-colors"
            {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {link.text}
          </a>
        );
        
        lastIndex = placeholderIndex + placeholder.length;
      }
    });
    
    // Add remaining text
    if (lastIndex < currentText.length) {
      parts.push(currentText.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  return (
    <article className="mb-8">
      <header className="mb-3">
        <h3 className="text-lg font-medium mb-2">
          {external ? (
            <a 
              href={url} 
              className="hover:text-gray-600"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {title}
              <span className="inline-block ml-1 text-sm" aria-label="External link">
                ↗
              </span>
            </a>
          ) : (
            <Link href={url} className="hover:text-gray-600">
              {title}
            </Link>
          )}
          {featured && (
            <span className="inline-block ml-2 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full mono">
              Featured
            </span>
          )}
          {external && (
            <span className="inline-block ml-2 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full mono">
              Informal Systems
            </span>
          )}
        </h3>
        <div className="text-sm text-gray-600 mono flex flex-wrap items-center gap-2">
          <time dateTime={date}>{formatDate(date)}</time>
          <span className="text-gray-400">·</span>
          <span>{readTime}</span>
          {tags && tags.length > 0 && (
            <>
              <span className="text-gray-400">·</span>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                  <span key={tag} className="text-gray-500">
                    {tag}
                    {index < tags.length - 1 && ","}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
      <p className="text-gray-700 leading-relaxed">
        {processExcerpt(excerpt, links)}
      </p>
    </article>
  );
}
