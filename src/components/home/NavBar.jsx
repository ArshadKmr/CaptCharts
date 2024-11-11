import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const [userInfo, setUserInfo] = useState(localStorage.getItem('captchartUser'))
    const navigate = useNavigate()



    const handleLogout = () => {
        localStorage.removeItem('captchartUser')
        setUserInfo(null) // Update state to trigger re-render
    }

    useEffect(() => {
        // This will run when the component mounts and whenever `userInfo` changes
        const storedUser = localStorage.getItem('captchartUser')
        setUserInfo(storedUser) // Set the state to the current user info from localStorage
    }, [])

    return (
        <>
            <div className="w-full flex justify-between bg-black p-5">
                <div className='px-10'><img src="/images/CAPTCHARTS LOGO 3 1.png" /></div>
                <div className='flex gap-7 text-white p-8 items-center custom-heading'>
                    <h3 onClick={() => navigate('/')} className='text-primary'>Home</h3>
                    <h3 onClick={() => navigate('/posts')}>Gallery</h3>
                    {!userInfo ? (
                        <button onClick={() => navigate('/login')}><p className='bg-primary w-full px-6 py-2 rounded-md hover:bg-orange-500'>Login</p></button>
                    ) : (
                        <button onClick={() => handleLogout()}><p className='bg-primary w-full px-6 py-2 rounded-md hover:bg-red-500'>Logout</p></button>
                    )}
                </div>
            </div>
        </>
    )
}

export default NavBar