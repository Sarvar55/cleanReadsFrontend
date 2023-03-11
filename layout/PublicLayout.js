import Banner from '@/components/banner/Banner';
import Header from '@/components/navbar/Header';
import PostList from '@/components/Post/PostList';
import Tag from '@/components/tag/Tag';
import { Trending } from '@/components/trend/Trending';

export const PublicLayout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="">
        <div className="md:max-w-6xl mx-auto px-8">
          <Trending />
        </div>{' '}
        <div className="relative mt-10">
          <hr className="w-full absolute left-0 right-0 top-0" />
        </div>{' '}
        <div className="md:max-w-6xl mx-auto px-8 flex flex-col gap-5">
          <div className="flex justify-between md:flex-row items-start flex-col gap-11 pt-[3.5rem]">
            <div className="md:order-1 order-2">
              <PostList />
            </div>{' '}
            <div className="md:order-2 order-1">
              <Tag />
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
