import Image from 'next/image';
import Logo from '../../public/images/banner.png';

const styles = {
  wrapper:
    'h-max-[10rem] flex items.center justify-center bg-[#FCC017] border-y border-black',
  accentedButton: 'bg-black text-white py-2  px-4 rounded-full md:my-4 my-5',
  content: 'max-w-7xl flex flex-1 items-center justify-between',
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="lg:space-y-5 px-10 flex-[3] space-x-2">
          <h1 className="max-w-xl md:text-[6rem] text-[4.7rem] font-mediumSerifItalic">
            {' '}
            Stay Crious.{' '}
          </h1>{' '}
          <h3 className="md:text-2xl text-[1.5rem]">
            {' '}
            Discover stories, thinking, and expertise from writers on any topic.{' '}
          </h3>{' '}
          <button className={styles.accentedButton}>
            {' '}
            Start reading{' '}
          </button>{' '}
        </div>{' '}
        <Image
          className="hidden  md:inline-flex object-contain"
          src={Logo}
          width={500}
          height={400}
          alt="banner logo"
        />{' '}
      </div>{' '}
    </div>
  );
};

export default Banner;
