import React from 'react'

export default function Footer() {


    const footer: {title:string}[] = [
        {
            title: "Terms of use"
        },
         {
            title: "Privacy policy"
        },
         {
            title: "Affiliation Program"
        },
         {
            title: "Contact us"
        },
    ]



   
  return (
    <div className='bg-black/95 px-10  md:px-14 py-6'>
        <div className='flex justify-between items-center flex-col md:flex-row '>
           
           <div >
             {footer.map((ite)=>{
                return <p key={ite.title} className='text-white cursor-pointer hover:text-orange-600 p-1.5 w-full'> {ite.title}</p>
            })}
           </div>

           <hr className='text-white/70 my-12' />

            <div className=''>
                <i className="fa-brands fa-instagram text-amber-600 cursor-pointer md:m-3 mx-1.5 rounded-4xl bg-amber-900/45 p-4 text-3xl hover:scale-110 "></i>
                <i className="fa-brands fa-github  text-purple-500 cursor-pointer  md:m-3 mx-1.5 rounded-4xl bg-purple-900/45 p-4 text-3xl hover:scale-110 "></i>
                <i className="fa-brands fa-linkedin-in  text-blue-400 cursor-pointer md:m-3 mx-1.5 rounded-4xl bg-blue-700/45 p-4 text-3xl hover:scale-110"></i>
                <i className="fa-brands fa-youtube  text-red-400 cursor-pointer  md:m-3 mx-1.5 rounded-4xl bg-red-700/45 p-4 text-3xl hover:scale-110 "></i>
            </div>

        
        </div>

        <hr className='text-white/20 my-12' />

        <div>
           <span className='text-white'>Copyright © 2025 Instant Gaming - All rights reserved</span>
        </div>

    </div>
  )
}
