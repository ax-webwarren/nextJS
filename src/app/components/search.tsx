import styles from './styles.module.css'
import Form from 'next/form'

export default async function SearchComponent() {
    return (
      <div className="bg-gray-700 font-bold font-sans p-10 w-auto">
            <h3 className='ltr:text-3xl text-white'>
                Need help shopping? Tell us what you're looking for.
            </h3>
            <Form action="/firearm-search-results" className="text-white m-5 gap-5 flex w-auto">
                <input name="slug" placeholder="Search" className="border-2 rounded-2xl pl-5 pr-5 pt-3 pb-3 bg-white text-black"/>
                <button type="submit" className="bg-yellow-600 pl-5 pr-5 pt-3 pb-3 uppercase border-amber-600 hover:bg-amber-500 hover:text-black hover:border-black cursor-pointer">Submit</button>
            </Form>
      </div>
    )
}

