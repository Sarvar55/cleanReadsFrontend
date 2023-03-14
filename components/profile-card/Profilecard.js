import Image from 'next/image';
import avatar from '../..//public/images/avatar.png';
const styles = {
  authorContainer: 'flex gap-[.4rem]',
  authorImage: 'object-cover',
  authorName: 'font-semibold',
  authorImageContainer:
    'grid pleace-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
};
const Profilecard = ({ userDetail }) => {
  const { image, username } = userDetail;
  const profileImage = image ? image : avatar;

  return (
    <div className={styles.authorContainer}>
      <div className={styles.authorImageContainer}>
        <Image
          src={profileImage}
          className={styles.authorImage}
          width={40}
          height={40}
          alt="resim"
        />{' '}
      </div>{' '}
      <div className={styles.authorName}> {username} </div>{' '}
    </div>
  );
};

export default Profilecard;
