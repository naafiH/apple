import img1 from "../assets/logo.png"
import img2 from "../assets/appstore.png"

export default function body() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center my-10 text-zinc-400 max-w-[450px] mx-auto'>
            <img className='w-16 ' src={img1} alt="" />
            <p className='text-[10px] my-2'> hey it's apple store</p>
            <h2 className='text-[30px] mx-20 text-center  bg-gradient-to-r from-zinc-200 to-zinc-700 bg-clip-text text-transparent ' id='text1'>Building digital products, brand, and experience</h2>
        </div>
        <div className='bg-zinc-700 '>

        <div className='flex justify-center py-5 flex-wrap mx-auto max-w-[800px] items-center '>
            <img className='w-[150px]' src={img2} alt="" />                
            <img className='w-[150px]' src={img2} alt="" />                
            <img className='w-[150px]' src={img2} alt="" />                
            <img className='w-[150px]' src={img2} alt="" />                

        </div>
        </div>
    
    </div>
  )
}
