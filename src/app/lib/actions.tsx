'use server'

export async function FireArmSearchResults({slug}: {slug: string}) {
  const pages = await fetch('http://localhost:3001/pages?search=')
  const pagesData = await pages.json()

  return (
    <div className="result flex">
        {slug}
    </div>
  );
}

export async function subscribe(searchParams: any) {
    let response;
    await fetch(`http://localhost:3001/subscription`, {
        method: "POST",
        body: JSON.stringify({
            name: `${searchParams.name}`,
            email: `${searchParams.email}`
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then((json) => response = json);

    if (response) {
        return {
            'success': true
        }
    }
}