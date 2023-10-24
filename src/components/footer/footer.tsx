import Img1 from "../assets/logo.png"
import Img2 from "../assets/img1.png"
import Img3 from "../assets/img2.png"


export default function footer() {
  return (
    <div>
        <div>
            <h1 className='text-center text-2xl px-2 max-w-[450px] mx-auto my-20  bg-gradient-to-l from-zinc-200 to-zinc-700 bg-clip-text text-transparent' >Collaborate with brand and agencies to create impactful result </h1>
        </div>
        <div className='flex flex-wrap justify-center items-center my-10 '>
            <div className='w-[300px]  sm:w-[250px] border-zinc-700 shadow-lg my-3 mx-3 border-[1px] text-zinc-300 px-5'>
                <img className='w-6 mt-28 ' src={Img1} alt="" />
                <h2 className='py-3'>UX & UI</h2>
                <p className='text-zinc-500 text-sm mb-10'>Designing interface that are infultive , efficient and enjoyable to use</p>
            </div>
            <div className='w-[300px]  sm:w-[250px] border-zinc-700 shadow-lg my-3 mx-3 border-[1px] text-zinc-300 px-5'>
                <img className='w-6 mt-28 ' src={Img2} alt="" />
                <h2 className='py-3'>UX & UI</h2>
                <p className='text-zinc-500 text-sm mb-10'>Designing interface that are infultive , efficient and enjoyable to use</p>
            </div><div className='w-[300px]  sm:w-[250px] border-zinc-700 shadow-lg my-3 mx-3 border-[1px] text-zinc-300 px-5'>
                <img className='w-6 mt-28 ' src={Img3} alt="" />
                <h2 className='py-3'>UX & UI</h2>
                <p className='text-zinc-500 text-sm mb-10'>Designing interface that are infultive , efficient and enjoyable to use</p>
            </div><div className='w-[300px]  sm:w-[250px] border-zinc-700 shadow-lg my-3 mx-3 border-[1px] text-zinc-300 px-5'>
                <img className='w-6 mt-28 ' src={Img2} alt="" />
                <h2 className='py-3'>UX & UI</h2>
                <p className='text-zinc-500 text-sm mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>
    </div>
  )
}
