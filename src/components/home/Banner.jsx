
const Banner = () => {
    return (
        <>
            <div className="relative hidden lg:flex w-full overflow-hidden">
                {/* Background container */}
                <div
                    className="relative w-full min-h-[400px] md:h-[500px] lg:h-[610px] transition-all duration-300 ease-in-out bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/image 12.png')",
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* Text overlay */}
                    <div className="absolute z-10 lg:top-[360px] lg:left-[100px] text-white">
                        <div
                            className="text-[46px] leading-[52px] font-light"
                            style={{
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >
                            Capture Your Imagination<br /> with
                            <span
                                className="ml-2"
                                style={{
                                    WebkitTextStroke: '2px #E98282',
                                    WebkitTextFillColor: 'transparent',
                                    fontFamily: 'Poppins, sans-serif',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                Captcharts!
                            </span>
                        </div>
                        <div className="text-[24px] leading-[52px] font-extralight mt-2 flex items-center space-x-2 cursor-pointer hover:underline">
                            <span>Explore</span>
                            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white relative">
                                <span className="text-3xl absolute -top-1 transform -translate-x-1/2">&#8594;</span> {/* Enlarged arrow */}
                            </div>
                        </div>
                    </div>
                    {/* Overlay image */}
                    <img
                        src="/images/Mask group.png"
                        alt="Overlay"
                        className="absolute
              w-[80%] md:w-[50%] lg:w-[636.5px]
              h-auto
              top-20 md:top-[80px] lg:top-[82.5px] lg:left-[54px]
              transition-all duration-300 ease-in-out object-cover"
                    />
                    <img
                        src="/images/Mask group (1).png"
                        alt="Overlay"
                        className="absolute
              w-[80%] md:w-[50%] lg:w-[638px]
              h-auto
              top-20 md:top-[79px] lg:top-[81px] lg:left-[769px]
              transition-all duration-300 ease-in-out object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default Banner