export default async function FireArmSearchResultsPage(
  {searchParams}: {searchParams: any}
) {
  const res = await fetch(`http://localhost:3001/pages/search?slug=${searchParams.slug}`);
  const result = await res.json();
  return (
    <div className="search-result">
      <div className="heading p-10 bg-amber-500">
        <h4 className="text-2xl text-white uppercase font-bold font-sans">Results from your search:</h4>
      </div>
      <div className="result flex grid">
        {result.map((data: any) => (
          <div key={data.id} className="result p-10 border-2">
            <div className="title font-bold text-center">
              {data.title}
            </div>
            <div className="slug font-bold text-center">
            <button className="text-yellow-500 uppercase pt-3 pb-3 pl-7 pr-7 border-amber-500 border-2 mt-12 items-end hover:bg-amber-500 hover:text-black hover:border-black cursor-pointer">
                <a href={`firearms-list/${data.slug}`}>View</a>
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
