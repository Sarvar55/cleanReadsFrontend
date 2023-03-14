const Footer = () => {
  let links = [
    'Help',

    'Status',

    'Writers',

    'Blog',

    'Careers',

    'Privacy',

    'Terms',

    'About',

    'Text to speech',
  ];

  return (
    <div className="hidden md:block h-full md:w-[400px]">
      <div className="content mt-4">
        <ul className="texts flex  text-brefing items-center font-Helvetica flex-wrap">
          {' '}
          {links.map((link, index) => {
            return (
              <>
                <li key={index} className="text-sm px-2 py-1">
                  {' '}
                  {link}{' '}
                </li>{' '}
              </>
            );
          })}{' '}
        </ul>{' '}
      </div>{' '}
    </div>
  );
};

export default Footer;
