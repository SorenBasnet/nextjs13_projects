import Image from 'next/image'
import Link from 'next/link'


export default function About() {
  return (
    <main>
      <h1>Forms</h1>

      <p>Thank you for your submission!</p>

      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link href={"/"}>Go Back</Link></button>
      
     

    </main>
  )
}