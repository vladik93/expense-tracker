import Image from 'next/image'

const TransactionItem = () => {
  return (
    <div className="w-full px-2 py-4 flex items-center gap-4 bg-secondary-bg rounded-2xl">
      <div className="w-8 h-8 border-[1px] border-[#5DB98C] rounded-full flex justify-center items-center">
        <Image src="/icons/bag.svg" width={24} height={24} alt="bag icon"  />
      </div>
      <div>
        <p className="text-sm">Category Title</p>
        <p className="text-xs">Description here...</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm font-bold text-[#8BB588]">-5000$</p>
        <p className="text-xs">09:30 AM</p>
      </div>
    </div>
  )
}

export default TransactionItem;