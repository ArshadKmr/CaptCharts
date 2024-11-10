
const Footer = () => {
    return (
        <div className='m-4'>
            <div className="bg-[rgba(192,140,93,1)] w-full p-4 rounded-md relative">
                <img src="/images/Group 114.png" alt="" className="absolute -top-16 left-16" />
                <div className="text-white font-primary py-16 text-center">
                    <h1 className="font-normal text-4xl">Let&apos;s Connect!</h1>
                    <p className="font-extralight text-xl py-4 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.
                    </p>
                    <div className="flex justify-center items-center">
                        <div className="relative mt-2 rounded-lg shadow-sm w-full max-w-md">
                            <input
                                id="price"
                                name="price"
                                type="text"
                                placeholder="Type your Email....."
                                className="block w-full rounded-lg py-4 pl-7 pr-20 text-gray-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center text-center p-[1px]">
                                <label htmlFor="currency" className="sr-only">
                                    Currency
                                </label>
                                <button
                                    id="currency"
                                    name="currency"
                                    className="h-full text-center py-2 px-8 rounded-lg border-0 bg-[rgba(192,140,93,1)] text-white focus:ring-2 sm:text-sm"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/images/footerArrow.png" className="absolute right-16 bottom-36" alt="" />
            </div>
        </div>
    )
}

export default Footer