

const MainHeader = () => {
  return (
    <>
      <div className="flex justify-end gap-x-4 cursor-pointer bg-neutral-900 text-zinc-50 border-t-4 rounded-md ">
        <a> login</a>
        <a> signup</a>
      </div>
      <div className="flex justify-between items-center px-4 py-2 border-[1px] rounded-[5px]">
        <div className="cursor-pointer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="Logo" className="h-8" />
        </div>

        {/* Middle Navigation */}
        <div className="flex gap-4 cursor-pointer">
          <div>women</div>
          <div>men</div>
          <div>company</div>
          <div>stores</div>
        </div>

        {/* Other Actions */}
        <div className="flex gap-4 cursor-pointer">
          <div>Search</div>
          <div>Help</div>
          <div>img</div>
        </div>
      </div>

    </>
  );
};

export default MainHeader;