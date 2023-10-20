import Image from 'next/image'
import Link from 'next/link'
import Chart from 'chart.js/auto';
import BarChart from './component/BarChart';


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

    <main>

      <div style={{
        zIndex: -1, 
        position: "fixed", 
        width: "100vw", 
        height: "100vh"
      }}>

      <Image
        src="/profile.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit='cover'
      />
      </div>

      <h1 className='text-center'>HELLO WORLD!</h1>

      <menu>
        <table class="table-auto">
          <tbody>
          <tr>
            <th>Dashboard</th>
            <th>Writings</th>
            <th>Camera</th>
            <th>Me</th>
          </tr>
          </tbody>
        </table>
      

      </menu>
      <div class="backdrop-blur-sm bg-black/20 ...">        
      <p>About me</p>
      <Image
      src="/road.jpg"
      width={500}
      height={10}

      />
      <div class="m-10"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Proin vel sem ut arcu sodales sollicitudin in quis dolor. In hac habitasse platea dictumst. Nullam ut tempus magna. Morbi sit amet ipsum pharetra, vulputate ligula accumsan, finibus turpis. Nunc eget mi in erat commodo tempus at eu lectus. Duis nec varius lacus. Nam dictum hendrerit neque non convallis. Nulla facilisi. Quisque nisl metus, iaculis non elit at, porta semper arcu. Fusce pulvinar mauris eget magna pharetra, eu porttitor diam ornare. Sed porta leo nec ultricies mattis. Ut eget mauris at lorem tempor cursus. Quisque ac nunc porta, pretium turpis ac, maximus odio. Aliquam sit amet est arcu.
      </div>

      

</div>

<div> 
  <BarChart />
</div>
      </main>
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
