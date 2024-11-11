import { useEffect, useState } from 'react';
import { ChatBubbleLeftIcon, HeartIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { getPost, handleComment, handleLike, insertPost } from '../../action/userAction';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

const PostModal = () => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('captchartUser')))
    const [post, setPost] = useState([]);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showModal, setShowModal] = useState({ postId: "", isOpen: false });
    const [render, setRender] = useState(0)
    const [commentData, setCommentData] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        // This will run when the component mounts and whenever `userInfo` changes
        const storedUser = JSON.parse(localStorage.getItem('captchartUser'))
        setUserInfo(storedUser) // Set the state to the current user info from localStorage
    }, [])

    useEffect(() => {
        fetchPost();
    }, [render]);

    const handleFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }
        if (e.target.files.length > 1) {
            toast.error("Please select only one image");
            return;
        }

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };

    const fetchPost = async () => {
        try {
            const res = await getPost();
            if (res?.status === 200) {
                setPost(res?.data?.posts);
            } else {
                toast.error(res?.data?.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSave = async () => {
        try {
            if (!userInfo) {
                toast.error("You must login to post")
                return
            }
            const res = await insertPost({ title, image });
            if (res?.status === 201) {
                toast.success("Post saved successfully")
                setImage(null)
                setTitle(null)
                setIsModalOpen(false)
                setRender(render - 1)
            } else {
                toast.error(res?.data?.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const like = async (id) => {
        if (!userInfo) {
            toast.error("You must login to like")
            return
        }
        const res = await handleLike(id)
        if (res?.status === 200) {
            setRender(render - 1)
        } else {
            toast.error(res?.data?.message)
        }
        // Handle like logic (toggle like, update like count)
    };

    const comment = async (id) => {
        if (!userInfo) {
            toast.error("You must login to comment")
            return
        }
        if (!commentData) {
            toast.error("You must type the comment")
            return
        }
        setShowModal({ postId: "", isOpen: false })
        const res = await handleComment({ id, commentData })
        if (res?.status === 200) {
            setRender(render + 1)
        } else {
            toast.error(res?.data?.message)
        }
        // Handle comment logic (open comment modal, etc.)
    };

    const handleLogout = () => {
        localStorage.removeItem('captchartUser')
        setUserInfo(null) // Update state to trigger re-render
    }

    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />
            <div className='mx-24 my-4 flex justify-between items-center'>
                <img onClick={() => navigate('/')} src="/images/CAPTCHARTS LOGO 2.png" className='hover:cursor-pointer animate-pulse' alt="" />
                <div className='w-1/3 flex justify-between items-center text-center'>
                    <input type="text" className='border rounded-3xl px-4 py-2 bg-gray-200' placeholder='Search...' />
                    <div className='flex w-40 relative bg-primary rounded-3xl text-center justify-center '>
                        <img
                            src='https://picsum.photos/200/300'
                            alt={comment?.author?.name}
                            className="absolute left-2 top-1 h-10 w-10 rounded-full object-cover"
                        />
                        <h3 className='py-3 text-white'>{userInfo && userInfo?.name}</h3>
                    </div>
                    {!userInfo ? (
                        <button onClick={() => navigate('/login')}><p className='bg-primary rounded-3xl w-40  py-3 text-white hover:bg-orange-500'>Login</p></button>
                    ) : (
                        <button onClick={() => handleLogout()} className='bg-primary rounded-3xl w-40  py-3 text-white'>Logout</button>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-between px-16 mx-24 shadow-[0_4px_15px_rgba(0,0,0,0.25)] relative rounded-2xl">
                <div className='absolute bottom-6 left-6'>
                    <div className='relative'>
                        <img src="/images/uploadImageInnerRectangle.png" alt="" className='absolute top-[10px] right-[10px]' />
                        <img src="/images/uploadImageRectangle.png" alt="" />
                    </div>
                </div>
                <div className='relative'>

                    {/* Button to open the modal */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-[600px] px-4 py-2 text-white text-xl rounded-3xl ml-80 bg-[rgb(192,140,93)]"
                    >
                        Upload Images
                    </button>
                    <img src="/images/uploadImageButton.png" className='absolute -right-4 -top-5 w-9 h-9' alt="" />
                </div>
                <img src="/images/uploadImage.png" alt="" className="mr-20 z-10" />
                <div className='absolute right-24 top-16 z-[1]'>
                    <div className='relative '>
                        <img src="/images/uploadImageInnerRectangle.png" alt="" className='absolute right-2 top-2 w-32' />
                        <img src="/images/uploadImageRectangle.png" alt="" className='w-36' />
                    </div>
                </div>
            </div>
            <div className='mx-24'>
                {post?.length > 0 ? (post?.map((item, index) => {
                    return (
                        <div key={index} className=" sm:py-8 ">
                            <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.25)] rounded-xl p-6">
                                <h1 className='text-3xl font-semibold text-gray-900'>{item?.user?.name}</h1>
                                {/* Post Title */}
                                <h2 className="p-3 text-lg font-medium text-gray-600">{item?.title}</h2>

                                {/* Post Image */}
                                <div className="mt-4">
                                    <img
                                        src={item?.image?.url}
                                        alt="Post"
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                    <div className='text-gray-500 flex justify-between my-2'>
                                        <h2>
                                            liked by {item?.likes?.[0]?.name} {item?.likes?.[1]?.name}
                                        </h2>
                                        <h2>
                                            {item?.comments?.length} Comments
                                        </h2>
                                    </div>
                                </div>

                                {/* Post Stats */}
                                <div className="flex justify-between items-center mt-4 ">
                                    <div className="flex items-center">
                                        {/* Like Button */}
                                        <button onClick={() => like(item._id)} className="flex border border-primary justify-center w-96 rounded-3xl items-center space-x-2 h-10 group  hover:border-orange-500">
                                            <HeartIcon className="text-primary group-hover:text-orange-500 h-6 w-6" />
                                            <span className='text-primary group-hover:text-orange-500'> Like</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center text-center">
                                        {/* Comment Button */}
                                        <button
                                            onClick={() => setShowModal({ postId: item._id, isOpen: true })}
                                            className="flex items-center justify-center space-x-2 text-white bg-primary rounded-3xl group hover:bg-red-500 w-96 h-10"
                                        >
                                            <ChatBubbleLeftIcon className="h-6 w-6" />
                                            <span> Comments</span>
                                        </button>
                                    </div>
                                    {/* Modal */}
                                    {showModal?.isOpen && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                                            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                                                <div className="mb-4">
                                                    <label htmlFor="comment" className="block font-medium mb-2 text-center ">
                                                        Add a comment
                                                    </label>
                                                    <textarea
                                                        id="comment"
                                                        rows="3"
                                                        value={commentData}
                                                        placeholder='Enter comment...'
                                                        onChange={(e) => setCommentData(e.target.value)}
                                                        className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                                                    ></textarea>
                                                </div>
                                                <div className="flex justify-end space-x-2">
                                                    <button
                                                        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                                                        onClick={() => setShowModal({ isOpen: false })}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-red-500"
                                                        onClick={() => comment(showModal.postId)}
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <br />
                                <hr />
                                <hr />
                                <hr />
                                {/* Comment List */}
                                <div className="mt-4">
                                    {item?.comments?.length > 0 ? (
                                        <div className="space-y-4">
                                            {item?.comments?.map((comment, index) => (
                                                <div key={index} className="flex items-start space-x-2">
                                                    <img
                                                        src='https://picsum.photos/200/300'
                                                        alt={comment?.author?.name}
                                                        className="h-8 w-8 rounded-full object-cover"
                                                    />
                                                    <div className="text-sm">
                                                        <div className='flex justify-between mb-2'>
                                                            <p className="font-semibold">{comment?.author?.name}</p>
                                                            <img src="/images/commentButton.png" alt="" />
                                                        </div>
                                                        <p className="bg-[rgba(236,200,174,0.3)] w-96 pl-8 py-4 rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                                                            {comment?.comment}
                                                        </p>
                                                        <div className="mt-4">
                                                            {comment?.response?.length > 0 && (
                                                                <div className="space-y-4">
                                                                    {comment?.response?.map((response, index) => (
                                                                        <div key={index} className="flex items-start space-x-2">
                                                                            <img
                                                                                src='https://picsum.photos/200/300'
                                                                                alt={response?.user?.name}
                                                                                className="h-8 w-8 rounded-full object-cover"
                                                                            />
                                                                            <div className="text-sm">
                                                                                <div className='flex justify-between mb-2'>
                                                                                    <p className="font-semibold">{response?.user?.name}</p>
                                                                                    <img src="/images/commentButton.png" alt="" />
                                                                                </div>
                                                                                <p className="bg-[rgba(236,200,174,0.3)] w-96 pl-8 py-4 rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
                                                                                    {response?.text}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">No comments yet.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })
                ) : (
                    <div className='my-16 text-center'>
                        <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.25)] rounded-xl font-light text-5xl p-6 animate-pulse">
                            <h1 className='animate-bounce'>
                                Loading post...
                            </h1>
                        </div>
                    </div>
                )}
            </div >


            {/* Modal */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg ml-36 font-semibold">Create Post</h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    &times;
                                </button>
                            </div>

                            <div className="mt-4">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="flex sm:max-w-md">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            autoComplete="off"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            placeholder="Title of post"
                                        />
                                    </div>
                                    <div className="col-span-full mt-6">
                                        <label htmlFor="cover-photo" className="block text-sm text-center font-medium leading-6 text-gray-900">
                                            Select image to upload
                                        </label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                {image ? (
                                                    <div className="mt-4 flex justify-center">
                                                        <img src={image} alt="Preview" className="h-40 w-auto object-cover rounded-md shadow-lg" />
                                                    </div>
                                                ) : (
                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                )}
                                                <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor="file"
                                                        className="cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        <span>Upload Image</span>
                                                        <input
                                                            onChange={handleFile}
                                                            id="file"
                                                            name="file"
                                                            accept=".png,.jpg,.avif,.jpeg"
                                                            type="file"
                                                            className="sr-only"
                                                        />
                                                    </label>
                                                </div>
                                                <p className="ml-3 text-xs leading-5 text-gray-600">PNG, JPG Only</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Optional: Button to submit or save */}
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={() => handleSave()}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                                    >
                                        Save Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default PostModal;
