import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PostList from '@/components/Post/PostList';
import Tag from '@/components/tag/Tag';
import { Trending } from '@/components/trend/Trending';
import { useEffect, useState } from 'react';

export const PublicLayout = () => {
  const [fixed, setFixed] = useState(false);

  const scrollHandle = () => {
    if (window.scrollY >= 888) setFixed(true);
    else setFixed(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);

    return () => {
      window.removeEventListener('scroll', scrollHandle);
    };
  }, []);

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
          <div className="right md:w-[35%] w-full md:order-2 order-1">
            <div className={fixed ? 'md:fixed z-50 md:top-[15%]' : ''}>
              <Tag />
              <Footer />
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
