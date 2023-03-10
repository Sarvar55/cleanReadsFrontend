import Image from 'next/image';
import Logo from '../../public/images/trending-up.svg';
import Profilecard from '../profile-card/Profilecard';
import TrendIndex from '../util/TrendIndex';

const trendUsers = [
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Why I Will Never Use Alpine Linux Ever Again',
    time: '5dk',
    date: 'Mart',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Demotivating a (Skilled) Programmer',
    time: '5dk',
    date: 'Mart',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Ukraine War, 7 March 2023',
    time: '5dk',
    date: 'Mart',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Ukraine War, 7 March 2023',
    time: '5dk',
    date: 'Mart',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Ukraine War, 7 March 2023',
    time: '5dk',
    date: 'Mart',
  },
  {
    username: 'Sarvar55',
    image: null,
    postName: 'Ukraine War, 7 March 2023',
    time: '5dk',
    date: 'Mart',
  },
];

const Trenduser = () => {
  return (
    <div className="mt-6">
      <h5 className="flex gap-2 items-center">
        {' '}
        <span className="border border-gray-400 px-1 py-1 rounded-full">
          {' '}
          <Image src={Logo} alt="resim" width={10} height={10} />{' '}
        </span>{' '}
        Trending on Medium{' '}
      </h5>{' '}
      <div className="mt-3">
        <div className="grid md:grid-cols-3  grid-cols-2 gap-8">
          {' '}
          {trendUsers.map((user, index) => {
            const { postName, time, date } = user;
            return (
              <>
                <div className="flex gap-2 items-start">
                  <TrendIndex index={index} />{' '}
                  <div className="mx-2">
                    <Profilecard userDetail={user} />{' '}
                    <div className="font-medium py-2"> {postName} </div>{' '}
                    <p className="font-heebo">
                      {' '}
                      {date}: {time}{' '}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </>
            );
          })}{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default Trenduser;
