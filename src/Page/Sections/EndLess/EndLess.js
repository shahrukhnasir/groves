import React from 'react'
import styles from './EndLessStyle.module.css'
import Image from 'next/image'
const EndLess = () => {
    return (
        <>
            <section className={styles.mainContainer}>
                <div className='container'>
                    <div className={styles.innerSection}>
                        <h1>Mall of: Endless Possibilities</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis
                        </p>
                        <Image
                        src="./images/secound_img.jpg"
                        width={200}
                        height={300}
                        
                        />


                    </div>


                </div>

            </section>

        </>
    )
}

export default EndLess