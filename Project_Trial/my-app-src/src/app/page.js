import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <h1>Travel Bucketlist : </h1>
          <br/>
          <form>

            <p>ALL THE INPUT WILL BE STORED IN GOOGLE SHEET AND THEN WILL BE RETRIEVED FOR THE ABOUT PAGE</p>
            <div className='p-10'>
            <label>Place Name : </label>
            <input className='text-black'></input>
            </div>
            <br />
            <div className='p-10'>
            <label>What season are you planning to travel threre at ? : </label>
            <input className='text-black'></input>
            </div>
            <br />
            <div className='p-10'>
            <label>Budget available for the travel :</label>
            <input className='text-black'></input>
            </div>
            <br />
            <div className='p-10'>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link href={"/pages/about"}>Submit</Link></button>
            </div>
            </form>


     
      
     

    </main>
  )
}
