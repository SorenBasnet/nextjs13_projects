import Image from 'next/image'
import Link from 'next/link'

// async function getData(){
//   const res = await fetch('http://numbersapi.com/#42') 

//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()




// }





export default async function Home() {
  // const data = await getData()
  return (
    // <main>
      <Image
        src="/profile.jpg"
        alt="Picture of the author"
      width={500}
      height={500}
      />
    //   <h1>Travel Bucketlist : </h1>
    //       <br/>
    //       <form>



    //         <p>ALL THE INPUT WILL BE STORED IN GOOGLE SHEET AND THEN WILL BE RETRIEVED FOR THE ABOUT PAGE</p>
    //         <div className='p-10'>
    //         <label>Place Name : </label>
    //         <input className='text-black'></input>
    //         </div>
    //         <br />
    //         <div className='p-10'>
    //         <label>What season are you planning to travel threre at ? : </label>
    //         <input className='text-black'></input>
    //         </div>
    //         <br />
    //         <div className='p-10'>
    //         <label>Budget available for the travel :</label>
    //         <input className='text-black'></input>
    //         </div>
    //         <br />
    //         <div className='p-10'>
    //         <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
    //         </div>
    //         </form>

    //         <div> 
    //         <iframe width="560" height="315" src="https://www.youtube.com/embed/-4zC8phWZ30?si=02DLrbMj92jNg-vh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    //         </div>


     
      
     

    // </main>
  )
}

// "use client";

// import { use } from "react";

// async function getData() {
//   const res = fetch('http://numbersapi.com/random/year?json')
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }
 
// export default async function Page() {

//   // const data = getData()


//   return 
//     <div>
//       <h1>Soren Basnet</h1>
//     </div>
    
  

// }
