import styles from './styles.module.css'

export default async function SubscribeComponent(
) {
    return (
        <div className="bg-gray-700 font-bold font-sans p-10 w-auto flex">
            <h3 className='ltr:text-xl text-white flex-1/12'>
                Subscribe to our blog to get the latest news and industry insights.
            </h3>
            <form action="/" className="text-white m-5 gap-5 flex w-auto flex-1/2">
                <input name="name" required placeholder="Name" className="border-2 rounded-2xl pl-5 pr-5 pt-3 pb-3 bg-white text-black"/>
                <input name="email" required placeholder="Email" className="border-2 rounded-2xl pl-5 pr-5 pt-3 pb-3 bg-white text-black"/>
                <div className="">
                <button type="submit" className="bg-yellow-600 pl-5 pr-5 pt-3 pb-3 uppercase border-amber-600 hover:bg-amber-500 hover:text-black hover:border-black cursor-pointer">Subscribe</button>
                </div>                
            </form>
      </div>
    )
}
