import Image from 'next/image';
import bookmark from '../..//public/images/bookmark.svg';
import Logo from '../../public/images/medium.png';
import Profilecard from '../profile-card/Profilecard';
const styles = {
  wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem]',
  authorContainer: 'flex gap-[.4rem]',
  authorImage: 'obkect-cover',
  authorImageContainer:
    'grid pleace-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  postDetails: 'flex-[2.5rem] flex flex-col',
  authorName: 'font-semibold',
  title: 'font-bold text-2xl',
  brefing: 'text-[#787878]',
  detailsContainer: 'flex items-center justify-between text-[#787878]',
  articleDetails: 'my-2 text-[.8rem]',
  category: 'bg-[#F2F3F2] p-1 rounded-full',
  bookmarkContainer: 'cursor-pointer',
};

const PostCard = () => {
  const userDetail = {
    username: 'Sarvar55',
    image: null,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <Profilecard userDetail={userDetail} />{' '}
        <h1 className={styles.title}>
          {' '}
          I Asked Leading Covid Scientists Off the Record About the Virus s
          Origins and the{' '}
        </h1>{' '}
        <div className={styles.brefing}> Here s what they told me </div>{' '}
        <div className={styles.detailsContainer}>
          <span className={styles.articleDetails}>
            {' '}
            Mar 8· 5 min read· <span className={styles.category}>
              {' '}
              Coding{' '}
            </span>{' '}
          </span>{' '}
          <span className={styles.bookmarkContainer}>
            <Image src={bookmark} alt="bookmark" width={20} height={20} />{' '}
          </span>{' '}
        </div>{' '}
      </div>{' '}
      <div className={styles.thumbnailContainer}>
        <Image src={Logo} height={100} width={100} alt="s" />{' '}
      </div>{' '}
    </div>
  );
};

export default PostCard;
