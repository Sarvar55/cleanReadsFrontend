const tags = [
  {
    name: 'Programing',
  },

  {
    name: 'Data Science',
  },
  {
    name: 'Technology',
  },
  {
    name: 'Self Improvement',
  },
  {
    name: 'Relationships',
  },
  {
    name: 'Writing',
  },
  {
    name: 'Machine Learning',
  },
  {
    name: 'Politics',
  },
  {
    name: 'Productivity',
  },
];

const Tag = () => {
  return (
    <div className={'wrapper md:w-[400px] w-full h-auto'}>
      <div className="content flex flex-col gap-4">
        <div className="title">
          <h2 className="font-Helvetica mb-3 font-semibold tracking-normal line-clamp-2 text-trend">
            {' '}
            Discover more of what matters to you{' '}
          </h2>{' '}
        </div>{' '}
        <div className="tags w-full flex flex-wrap">
          {' '}
          {tags.map((tag, index) => {
            const { name } = tag;
            return (
              <>
                <div
                  key={index}
                  className="tag h-[33px] flex items-center px-[6px] py-[16px] mr-[8px] mb-[8px] border-edgecolor border text-brefing text-sm font-normal rounded-sm cursor-pointer "
                >
                  {' '}
                  {name}{' '}
                </div>{' '}
              </>
            );
          })}{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default Tag;
