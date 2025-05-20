import styles from './styles.module.css'

export default async function NavigationComponent() {
    const data = await fetch('http://localhost:3001/navigation')
    const navigation = await data.json()
    return (
      <ul className="navigation flex gap-5 text-xl font-bold uppercase text-white bg-gray-800 font-sans p-5">
        {navigation.map((nav: any) => (
          <li key={nav.id}><a href={nav.link}>{nav.name}</a></li>
        ))}
      </ul>
    )
}

