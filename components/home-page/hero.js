import Image from 'next/image';

import classes from './hero.module.css';

function Hero(){
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/avatar.jpg"
                    alt="avatar"
                    width={300}
                    height={300}/>
            </div>
            <h1>name</h1>
            <p>content</p>
        </section>
    );
}

export default Hero;