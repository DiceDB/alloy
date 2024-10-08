import React from 'react';

const NotFoundPage = ({ url }: { url: string }) => {
  return (
    <div className="p-6 bg-gray-100 text-white rounded-lg shadow-lg border border-gray-700 mb-4">
      <h2 className="text-gray-700 text-2xl font-semibold mb-4">
        No matching data was found🥺
      </h2>

      <div className="flex items-center justify-between mb-4 pt-4">
        <h3 className="text-gray-700 text-2xl font-semibold">
          Try refining your search or browse the documentation for common
          commands.
        </h3>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-200"
      >
        View Documentation
      </a>
    </div>
  );
};

export default NotFoundPage;
