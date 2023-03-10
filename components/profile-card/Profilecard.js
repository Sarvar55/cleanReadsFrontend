import Image from 'next/image';
import avatar from '../..//public/images/avatar.png';

const Profilecard = ({ userDetail }) => {
  const { image, username } = userDetail;
  const profileImage = image ? image : avatar;

  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Image
        className="object-contain"
        src={profileImage}
        alt={username}
        height={30}
        width={30}
      />{' '}
      <div className="text-black font-medium"> {username} </div>{' '}
    </div>
  );
};

export default Profilecard;
