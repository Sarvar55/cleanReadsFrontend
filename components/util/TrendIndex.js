const TrendIndex = ({ index }) => {
  const hendleIndex = (index) => {
    return index < 10 ? '0'.concat(index + 1) : index;
  };

  return <div className="text-4xl text-slate-300"> {hendleIndex(index)} </div>;
};

export default TrendIndex;
