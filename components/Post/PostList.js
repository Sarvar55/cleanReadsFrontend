import PostCard from './PostCard';
//burada hıalama sorunu var padding den dolayı
const PostList = (props) => {
  return (
    <div className="w-[41rem] h-auto py-[.8rem] flex flex-col gap-5" {...props}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostList;
