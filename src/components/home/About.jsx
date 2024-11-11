
const About = () => {
    return (
        <div className='container'>
            <div className='mx-60 my-36'>
                <h3 className='text-[40px] font-semibold leading-[40px]' style={{ color: 'rgba(72, 88, 103, 1)' }}>About</h3>
                <div className='relative'>
                    <div className='absolute right-full w-screen bg-primary h-full'></div>
                    <h3 className='text-white custom-heading bg-primary py-3 pr-2 text-[40px] font-semibold leading-[40px] relative inline-block'>
                        Captcharts
                    </h3>
                </div>
                <p className="font-primary mt-5 text-[22px] font-normal leading-[40px] text-left decoration-solid decoration-0 text-gray-600">
                    Welcome to the world of limitless creativity and boundless possibilities! Imagine a photography camp where the shutter captures not just moments, but the spirit of determination and resilience. We&apos;re thrilled to present a unique experience tailored for students with determination, where the focus is not just on framing a shot, but on framing a brighter future.
                    <br />
                    In the heart of this camp, we celebrate the power of visual storytelling as a means of empowerment. Our goal is to provide a supportive and inclusive environment for young photographers who navigate the world with determination. Through the lens of a camera, we embark on a journey that transcends barriers and amplifies the voices that often go unheard.
                </p>
                <img src="/images/Mask group (2).png" className='my-10 w-full' alt="" />
                <p className="font-primary mt-5 text-[22px] font-normal leading-[40px] text-left decoration-solid decoration-0 text-gray-600">This camp isn&apos;t just about technical skills. It&apos;s about unlocking individual potential, fostering self-expression, and building a community where everyone&apos;s unique perspective is not only welcomed but celebrated.
                    <br />
                    This isn&apos;t just a photography camp; it&apos;s a kaleidoscope of inspiration, where each participant adds their own vibrant hue to the canvas of creativity. So, whether you&apos;re a novice or a seasoned photographer, come join us in capturing the extraordinary essence of determination through the lens of your camera. Let&apos;s embark on a journey where every snapshot is a testament to the wilful spirit within us all.</p>
            </div>
            <div className="flex ">
                <div className="flex-1 bg-[rgba(192,140,93,1)]">
                    <div className='relative m-16'>
                        {/* SVG Line */}
                        <svg
                            className="absolute top-0 left-0"
                            width="2"
                            height="465"
                            viewBox="0 0 2 465"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path opacity="0.2" d="M1 0V465" stroke="white" strokeWidth="2" />
                            <path d="M1 0V78" stroke="white" strokeWidth="2" />
                        </svg>
                        <div className='ml-10 text-white font-poppins'>
                            <span className="font-bold text-[140px] leading-[117px] tracking-[0.03em] uppercase opacity-20">
                                01
                            </span>
                            <h1 className="my-5 text-lg font-[500px] text-[50px] leading-[54px] tracking-[0.03em]">
                                Lorem Ipsum is simply <br /> dummy text of the printing
                            </h1>
                            <h3 className="font-light text-sm mt-2 text-[30px] leading-[40px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                            </h3>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <h3 className='absolute left-5 top-10 text-white font-[500px] text-[50px] leading-[54px]'>Explore the<br/> Program</h3>
                    <img src="/images/side-view-woman.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About