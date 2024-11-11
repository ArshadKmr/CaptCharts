
const Gallery = () => {
    return (
        <div className='m-32'>
            <h1 className='text-[40px] font-semibold leading-[40px] pl-4' style={{ color: 'rgba(72, 88, 103, 1)' }}>Gallery</h1>
            <div className='flex justify-between relative px-4'>
                <p className='my-2 text-[20px] text-gray-600'>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                <p className='absolute right-16 bottom-3 text-primary text-[20px] font-normal'>More</p>
                <div className='absolute bottom-3 right-5'>
                    <div
                        className="w-8 h-8 flex items-center justify-center rounded-full border relative"
                        style={{ borderColor: 'rgba(207, 121, 108, 1)' }}
                    >
                        <span className="text-3xl absolute -top-1 transform -translate-x-1/2 text-primary">&#8594;</span> {/* Enlarged arrow */}
                    </div>
                </div>
            </div>
            <div className='flex -space-x-3 mb-20'>
                <div className="flex flex-col -space-y-3">
                    <img src="/images/galleryPic1.png" alt="" />
                    <img src="/images/galleryPic2.png" alt="" />
                </div>
                <div>
                    <img src="/images/galleryPic3.png" alt="" />
                </div>
                <div className="flex flex-col -space-y-3">
                    <img src="/images/galleryPic4.png" alt="" />
                    <img src="/images/galleryPic5.png" alt="" />
                </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-3 px-3'>
                <img src="/images/Rectangle 171.png" className='w-[300px]' alt="" />
                <img src="/images/Rectangle 171.png" className='w-[300px]' alt="" />
                <img src="/images/Rectangle 171.png" className='w-[300px]' alt="" />
                <img src="/images/Rectangle 171.png" className='w-[300px]' alt="" />
            </div>
        </div>
    )
}

export default Gallery