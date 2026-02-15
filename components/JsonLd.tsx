/**
 * Renders a JSON-LD script tag for structured data (Schema.org).
 * Used for Product, Organization, etc. to help search engines index content.
 */
export function JsonLdScript({data}: {data: object}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
  );
}
