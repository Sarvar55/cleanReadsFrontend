import Banner from '@/components/banner/Banner';
import Header from '@/components/navbar/Header';
import Profilecard from '@/components/profile-card/Profilecard';
const userDetail = {
  username: 'Sarvar55',
  image: null,
};
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Profilecard userDetail={userDetail} />{' '}
    </>
  );
}
