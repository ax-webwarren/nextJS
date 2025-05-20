import styles from './styles.module.css'

export default function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-md epic-top-nav grid-cols-2 grid bg-black">
            <div className="tagline flex gap-3 text-white m-5">
                <span className="tagline-indicator">//</span>
                <div id="hs_cos_wrapper_module_1591647324229284_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="tagline">SHOOT SMART. SHOOT A ROCK.</div>
            </div>
            <div className="ml-auto epic-nav m-5">
                <ul className="navbar-nav epic-top-nav-list flex gap-3" role="menu">
                    <li className="nav-item icon-link-item ">
                        <a className="nav-link icon-link text-white uppercase" href="https://www.armscor.com/locator">
                            <div id="hs_cos_wrapper_module_1591647324229284_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="link_text">Dealer Locator</div>
                        </a>
                    </li>
                    <li className="nav-item icon-link-item text-white uppercase">
                        <a className="nav-link icon-link" href="https://www.armscor.com/contact-us/usa-contacts/">
                            <div id="hs_cos_wrapper_module_1591647324229284_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="link_text">Contact</div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

