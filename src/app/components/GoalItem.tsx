import Image from 'next/image';

const GoalItem = () => {
  return (
    <div className="flex-grow flex flex-col py-4 px-2 bg-secondary-bg rounded-2xl">
      <span className="flex mb-1 border-[1px] rounded-full h-8 w-8 justify-center items-center p-1 border-[#5DB98C]">
        <Image src="/icons/bag.svg" width={24} height={24} alt="goal item" />
      </span>
      <p className="text-sm mb-2">Category</p>
      
      <div className="w-full bg-main-bg h-2 relative overflow-hidden rounded-2xl mb-1">
        <span className="bg-[#5DB98C] absolute top-0 h-full" style={{width: '40%'}}></span>
      </div>
      
      <p className="text-[10px] flex justify-end items-end">40%</p>
    </div>
  )
};

export default GoalItem;