import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '../../public/images/medium.png';
import { styles } from './styles';

const Header = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 22) setNav(true);
    else setNav(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let color = !nav ? 'bg-[#FCC017]' : 'bg-white';
  let wrapper = `flex justify-center gap-10 p-5 transition sticky top-0 z-50 ${color}`;

  return (
    <div className={wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
            alt="image logo"
          />
        </div>{' '}
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>MemberShip</div>
          <div>Sign in</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>{' '}
    </div>
  );
};

export default Header;
