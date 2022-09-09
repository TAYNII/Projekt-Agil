import { useState } from 'react'
import styles from './ImgSlider.module.css'
import {AiFillHeart} from 'react-icons/ai'

const Slider = ({sliderData}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = sliderData.length

  const nextProduct = () => {
    setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex +1)
  }

  const previousProduct = () => {
    setCurrentIndex(currentIndex === 0 ? length -1 : currentIndex -1)
  }

  return (
    <div className={styles.slider_content}>
      <div className={styles.arrows}>
        <AiFillHeart className={styles.arrow} onClick={previousProduct}/>
        <AiFillHeart className={styles.arrow} onClick={nextProduct}/>
        {/* <span >&#9665;</span>
        <span >&#x25B7;</span> */}
      </div>

      {sliderData.map((sD, i) => (
        <div key={i} className={i === currentIndex ? `${styles.product_cell} ${styles.active}` : styles.product_cell}>
          {i === currentIndex &&
            <>
              <img className={styles.product_img_url} src={sD.productImgUrl} alt="News | product-image" />
              <span className={styles.product_title}>{sD.productTitle}</span>
              <span className={styles.product_brand}>{sD.productData.brand}</span>
              <AiFillHeart className={styles.likes_heart}/>
              <span className={styles.product_likes}>[{sD.productData.likes}]</span>
            </>
          }
        </div>
      ))}
    </div>
  )
}

export default Slider