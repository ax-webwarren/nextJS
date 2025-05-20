import styles from './styles.module.css'

export default function FooterComponent() {
    return (
        <div className="flex footer bg-black w-auto">
            <p className="copyright text-white font-sans text-sm text-center p-5 m-auto">
                © 2025 Armscor International, Inc. Advertised item appearance and specifications may change based on parts availability and product modifications.
            </p>
        </div>
    )
}
