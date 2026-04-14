import React, { useState, useEffect } from 'react';

interface Citation {
  display_name: string;
  https_url: string;
}

interface OpenAlexCitationsProps {
  workId: string;
}

export default function OpenAlexCitations({ workId }: OpenAlexCitationsProps) {
  const [citations, setCitations] = useState<Citation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // OpenAlex API to fetch citations for the work
    async function fetchCitations() {
      try {
        const response = await fetch(`https://api.openalex.org/works?filter=cites:${workId}&sort=publication_date:desc&select=doi,display_name,publication_year`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        // Extract citations (adjust based on the API response structure)
        setCitations(data.results || []);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchCitations();
  }, [workId]);

  if (loading) return <p>Loading citations...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {citations.length > 0 ? (
        <ul>
          {citations.map((citation, index) => (
              <li key={index}>
                  {`${citation.display_name} (${citation.publication_year}) `}
                  <a href={citation.doi} target="_blank" rel="noopener noreferrer">
                    {citation.doi}
                  </a>
                </li>
          ))}
        </ul>
      ) : (
        <p>No citations found.</p>
      )}
    </div>
  );
}