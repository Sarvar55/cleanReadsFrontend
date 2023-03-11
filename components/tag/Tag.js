const tags = [
  {
    name: 'Programing',
  },
  {
    name: 'Programing',
  },
  {
    name: 'Programing',
  },
  {
    name: 'Prog',
  },
  {
    name: 'Prog',
  },
  {
    name: 'self improvment',
  },
  {
    name: 'self improvment',
  },
  {
    name: 'Phyton',
  },
  {
    name: 'Java',
  },
  {
    name: 'Data sience',
  },
  {
    name: 'self improvment',
  },
];

const Tag = (props) => {
  return (
    <div className="w-[18rem] h-[16.8rem] pb-[1.5rem]" {...props}>
      <div className="title leading-4">
        <h2 className="font-Helvetica mb-3 font-semibold tracking-normal text-trend">
          {' '}
          Discover more of what matters to you{' '}
        </h2>{' '}
      </div>{' '}
      <div className="content flex justify-between flex-wrap">
        {' '}
        {tags.map((tag, index) => {
          const { name } = tag;
          return (
            <>
              <div
                key={index}
                className="tag w-fit h-[33px] flex items-center px-[6px] py-[16px] mr-[8px] mb-[8px] border-edgecolor border text-brefing text-sm font-normal rounded-sm cursor-pointer"
              >
                {' '}
                {name}{' '}
              </div>{' '}
            </>
          );
        })}{' '}
      </div>{' '}
    </div>
  );
};

export default Tag;
