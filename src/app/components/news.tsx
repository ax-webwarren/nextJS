import styles from './styles.module.css'
import Form from 'next/form'
import Image from 'next/image'

export default async function NewsComponent() {
    const news = await fetch('http://localhost:3001/news')
    const newsData = await news.json()
    return (
        <div className="grid news-list gap-5 text-xl font-bold uppercase text-white bg-gray-800 font-sans p-5">
            <h3 className="text-4xl text-yellow-500 m-5">News</h3>
            <div className="flex w-auto gap-8 justify-center m-10">
                {newsData.map((data: any) => (
                    <div key={data.id} className="news max-w-[300px] grid">
                        <div className="content">
                            <Image
                                src={data.content} 
                                alt={data.title}
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className="category text-yellow-500 uppercase mt-5 mb-5 text-3sm">
                            <a>
                                {data.category}
                            </a>
                        </div>
                        <div className="title">
                            <a>
                                {data.title}
                            </a>
                        </div>
                        <button className="text-yellow-500 uppercase pt-3 pb-3 pl-7 pr-7 border-amber-500 border-2 mt-12 items-end hover:bg-amber-500 hover:text-black hover:border-black cursor-pointer">
                            <a href={`news/${data.slug}`}>Read our blog</a>
                        </button>
                    </div>        
                ))}
            </div>
        </div>
    )
}

