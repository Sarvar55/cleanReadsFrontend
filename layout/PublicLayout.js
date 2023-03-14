import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar';
import PostList from '@/components/Post/PostList';
import Tag from '@/components/tag/Tag';
import { Trending } from '@/components/trend/Trending';

export const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Trending />
      <div className="wrapper w-full h-auto pt-[56px]">
        <div className="content w-[80%]  mx-auto flex md:justify-between items-start  md:flex-row  flex-col gap-9">
          <div className="left md:w-[45%] w-full md:order-1 order-2">
            <PostList />
          </div>{' '}
          <div className="right md:w-[30%] w-full md:order-2 order-1">
            <Tag />
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
