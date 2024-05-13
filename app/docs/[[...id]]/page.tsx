export default function DocsId({ searchParams, params }: { searchParams: object; params: object }) {
  return (
    <div className="m-16">
      <a href="/">Hey</a>
      <p className="text-4xl font-bold tracking-tight">DocsId</p>
      <p>Query Params:</p>
      <pre>{JSON.stringify(searchParams)}</pre>
      <p>Params:</p>
      <pre>{JSON.stringify(params)}</pre>
    </div>
  );
}
