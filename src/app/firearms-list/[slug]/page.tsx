import Image from "next/image";

export default async function FireArmPage(
  {searchParams, params}: {searchParams: any, params: any}
) {
  let res;
  const searchQueryParams = await searchParams;
  const {slug} = await params;
  console.log(searchQueryParams);
  console.log(slug);
  const response = await fetch(`http://localhost:3001/pages/search/`, {
      method: "POST",
      body: JSON.stringify({
          slug: `${slug}`,
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
      });
  res = await response.json();
  console.log(res);
  if (res) {
    return (
      <div>
        {res.map((r: any) => (
          <div key={r.id} dangerouslySetInnerHTML={{__html: r.content}}></div>
        ))}        
      </div>
    );
  }  
}
