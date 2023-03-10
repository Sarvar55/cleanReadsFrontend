import Banner from '@/components/banner/Banner';
import Header from '@/components/navbar/Header';
import PostCard from '@/components/PostCard/PostCard';
import Trenduser from '@/components/trend/Trenduser';

export default function Home() {
  return (
    <>
      <Header />
      <Banner /> {/*  */}{' '}
      <div className="container mt-3">
        <Trenduser />
        <div className="flex mt-4 flex-col gap-4 border-y border-black">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>{' '}
      </div>{' '}
    </>
  );
}
