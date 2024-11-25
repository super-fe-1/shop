

const List = () => {
  return (
    <>
      <div className="py-20 px-40 border-[3px] rounded-[5px] flex flex-col justify-center items-center w-full max-w-6xl space-y-4 mx-auto">
        <p className="text-3xl font-semibold">New Arrivals</p>
        <p className="text-center text-gray-600">
          Thoughtfully designed objects for the workspace, home, and travel
        </p>
      </div>
      <div className="flex justify-between items-center cursor-pointer px-4 py-2">
        <div className="flex">Sort</div>
        <div className="flex gap-x-4">
          <div>Category</div>
          <div>Brand</div>
          <div>Color</div>
          <div>Sizes</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 py-2">
        <div>
        <img src="image1.jpg" alt="Image 1" className="w-full h-auto"/>
          <div className="flex justify-between">
            <p>이름</p>
            <p>가격</p>
          </div>
        </div>
        <img src="image2.jpg" alt="Image 2" className="w-full h-auto"/>
        <img src="image3.jpg" alt="Image 3" className="w-full h-auto"/>
        <img src="image4.jpg" alt="Image 4" className="w-full h-auto"/>
        <img src="image5.jpg" alt="Image 5" className="w-full h-auto"/>
        <img src="image6.jpg" alt="Image 6" className="w-full h-auto"/>
      </div>
    </>
  );
};

export default List;