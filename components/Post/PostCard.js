import Image from 'next/image';
import bookmark from '../..//public/images/bookmark.svg';
import Logo from '../../public/images/images.jpeg';
import Profilecard from '../profile-card/Profilecard';

const userDetail = {
  username: 'Sarvar55',
  image: null,
};
const PostCard = (props) => {
  return (
    <div className="wrapper w-full h-auto flex justify-between items-center">
      <div className="left">
        <Profilecard userDetail={userDetail} />{' '}
        <h2 className="pt-[8px] font-Helvetica font-bold line-clamp-2 max-h-[56px]">
          {' '}
          What’ s Going On ? The Silicon Valley Bank Collapse vs.the 2008
          Financial Crisis{' '}
        </h2>{' '}
        <p className="max-h-[40px] cursor-pointer text-sm line-clamp-2 pt-1 font-Helvetica text-brefing text-[#787878]">
          {' '}
          Confused ? Here’ s a simple(yet thorough!) explainer.{' '}
        </p>{' '}
        <div className={'flex items-center justify-between text-[#787878]'}>
          <span className={"'my-2 text-[.8rem]"}>
            {' '}
            Mar 8· 5 min read·{' '}
            <span className={'bg-[#F2F3F2] p-1 rounded-full'}>
              {' '}
              Coding{' '}
            </span>{' '}
          </span>{' '}
          <span className={'cursor-pointer'}>
            <Image src={bookmark} alt="bookmark" width={20} height={20} />{' '}
          </span>{' '}
        </div>{' '}
      </div>{' '}
      <div className="right object-contain">
        <Image src={Logo} height={300} width={300} alt="s" />{' '}
      </div>{' '}
    </div>
  );
};

export default PostCard;
