import Image from "next/image";
import SearchComponent from '@/components/search';
import NewsComponent from '@/components/news';
import {subscribe} from './lib/actions';

export default async function Home(
  {searchParams}: {searchParams: any}
) {
  const searchQuery = await searchParams;
  let stat = null;
  if (searchQuery.name) {
    stat = await subscribe(searchQuery);    
  }

  return (
    <div className="homepage" style={{}}>
      <SearchComponent />
      <NewsComponent />
      {stat ? <div className='text-center p-5 text-2xl bg-amber-500 font-bold text-white'>Subscribed</div> : ''}
    </div>
  )
}
