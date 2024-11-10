
const NavBar = () => {
    return (
        <>
            <div className="w-full flex justify-between bg-black p-5">
                <div className='px-10'><img src="/images/CAPTCHARTS LOGO 3 1.png" /></div>
                <div className='flex gap-7 text-white p-8 items-center custom-heading'>
                    <h3 className='text-primary'>Home</h3>
                    <h3 >Gallery</h3>
                        <p className='bg-primary w-full px-6 py-2 rounded-md'>Login</p>
                </div>
            </div>
        </>
    )
}

export default NavBar