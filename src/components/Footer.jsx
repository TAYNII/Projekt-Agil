import React from 'react'
import instagram from "../media/instagramicon.png"
import facebook from "../media/facebookicon.png"
import tiktok from "../media/tiktokicon.png"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
        <div className={styles.footerinfo}>
          <div className={styles.leftfooter}>
            <h3>Kundtjänst</h3>
            <ul>
            <li>Om oss</li>
            <li>FAQ</li>
            <li>Ångerrätt & Retur</li>
            </ul>
          </div>
        <div className={styles.icons}>
            <img src={instagram} alt="insta" className={styles.icons1}/>
            <img src={facebook} alt="facebook" className={styles.icons2}/>
            <img src={tiktok} alt="tiktok" className={styles.icons3}/>
        </div>
          <div className={styles.rightfooter}>
            <h3>Information</h3>
            <ul>
            <li>Betalsätt</li>
            <li>Köpvillkor</li>
            <li>Integritetspolicy</li>
            </ul>
          </div>
        </div>
        <a className={styles.link} href="https://github.com/halmur/Projekt-Agil" target="_blank" rel="noopener noreferrer">Meet the projekt</a>
    </footer>
    </>
  )
}

export default Footer