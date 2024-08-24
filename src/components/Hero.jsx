function Hero({ onSearch }) {
  return (
    <div className="bg-[url('./img/hero.png')] bg-cover bg-bottom h-[70vh] w-[100vw] flex justify-center items-center">
      <input
        type="search"
        placeholder="Search"
        className="border-2 border-gray-300 rounded-[20px] p-2 w-[450px] m-2"
        onChange={onSearch}
      />
    </div>
  );
}

export default Hero;
