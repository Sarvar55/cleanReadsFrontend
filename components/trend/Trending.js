import Image from 'next/image';
import Logo from '../../public/images/Trend_up-512.webp';
import Profilecard from '../profile-card/Profilecard';
import TrendIndex from '../util/TrendIndex';
const trendUsers = [
  {
    username: 'Sarvar55',
    image: null,
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName:
      'A step-by-step guide to building a chatbot based on your own documents with GPT',
    time: 'Mar 9· 4 min read',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Demotivating a (Skilled) Programmer',
    time: 'Mar 9· 4 min read',
  },
];

export const Trending = (props) => {
  return (
    <div className={'w-full h-auto pt-[2.5rem] pb-[1rem]'} {...props}>
      <div className="content w-[80%] mx-auto">
        <div
          className={
            'font-Helvetica flex h-[1.9rem] leading-4 items-center mb-[1rem] flex-row'
          }
        >
          {' '}
          <p className="flex space-x-3 items-center">
            {' '}
            <Image src={Logo} alt="resim" width={28} height={29} />{' '}
            <span className="text-trend font-Helvetica font-semibold">
              {' '}
              Trending on Medium{' '}
            </span>{' '}
          </p>{' '}
        </div>{' '}
        <div className="posts grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {' '}
          {trendUsers.map((user, index) => {
            const { postName, time } = user;
            return (
              <>
                <div className="trending-post leading-relaxed h-auto w-full mb-[1rem] space-x-2 flex content-start">
                  <div className="left h-full">
                    <span span className="text-4xl text-slate-300">
                      {' '}
                      <TrendIndex index={index} />{' '}
                    </span>{' '}
                  </div>{' '}
                  <div className="right flex  w-full flex-col mt-3 gap-2">
                    <Profilecard userDetail={user} />{' '}
                    <div className="post-name w-full line-clamp-2 overflow-hidden text-trend ont-Helvetica font-Helvetica font-semibold">
                      {' '}
                      {postName}{' '}
                    </div>{' '}
                    <span className="space-y-2 text-brefing text-xs font-normal">
                      {' '}
                      {time}{' '}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </>
            );
          })}{' '}
        </div>{' '}
      </div>{' '}
      <hr className="" />
    </div>
  );
};
