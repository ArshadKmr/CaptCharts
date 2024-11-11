
const UserReview = () => {
    return (
        <div className='flex my-28 mx-32 items-center'>
            <div className='flex-1'>
                <h3 className="p-8 font-primary text-[50px] font-medium leading-[60px] text-left decoration-primary text-primary">
                    Lorem Ipsum is simply dummy text of the printing
                </h3>
            </div>
            <div className="flex-[1.1] relative items-center justify-center">
                <div className="max-w-lg flex ">
                    <img
                        src="/images/quotes.png"
                        alt="Opening quotes"
                        className="w-10 h-10 mr-2 absolute -top-8 -left-12"
                    />
                    <p className="text-gray-600  font-light text-[19px] w-full text-center leading-relaxed">
                        Hey there! I’m Megha Mohan, a 16-year-old UAE-based enthusiast with a passion for Photography and Astrophysics. Whether I’m diving into the world of photography or exploring the latest news on Dark Matter, you can bet I’m always up for an adventure.
                        On this webpage, I’m laying down my thoughts, experiences, and maybe a sprinkle of my expertise in photography. When I’m not lost in the virtual world or buried in my favorite books, you can catch me hanging out with my camera and telescope, tackling the latest challenges, and trying my hand at Astrophotography. So, buckle up, join me on this digital escapade, and let’s navigate the world of photography.
                    </p>
                    <img
                        src="/images/quotes.png"
                        alt="Closing quotes"
                        className="w-10 h-10 absolute -right-1 -bottom-10"
                    />
                </div>
                <h1 className='text-primary absolute -bottom-16 tracking-widest left-32 font-bold text-3xl'>MEGHA MOHAN</h1>
            </div>
        </div>
    )
}

export default UserReview