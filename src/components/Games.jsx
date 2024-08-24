function Games(props) {
  const buttonclick = () => {
    alert(`Your ${props.name} is being installed.`);
  };
  return (
    <div>
      <div className="bg-[#F1F1F1] text-center  sm:m-0 my-5 rounded-[20px] hover:scale-[1.01] transition-transform pb-2  ">
        <img
          src={props.src}
          height="100%"
          width="2100%"
          className="rounded-t-[20px]"
        ></img>
        <h5 className="m-2 text-lg font-extrabold bg-gradient-to-r from-gray-400 via-gray-600 to-gray-00 text-transparent bg-clip-text drop-shadow-lg text-wrap">
          {props.name}
        </h5>
        <button
          className="bg-[#454545] hover:bg-[#dc143c] transition-colors text-white font-bold py-1 px-4 rounded-full"
          onClick={buttonclick}
        >
          Get Now
        </button>
      </div>
    </div>
  );
}

export default Games;
