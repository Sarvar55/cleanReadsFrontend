import Image from 'next/image';
import Logo from '../../public/images/medium.png';
import { styles } from './styles';

const Header = () => {
  return (
    <div className={styles.wrapper}>
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
