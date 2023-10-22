import Image from 'next/image'
import Link from 'next/link'
import Chart from 'chart.js/auto';


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
            <th><Link href="/pages/blog">Writings</Link></th>
            <th><Link href="/pages/visualmedia">Camera</Link></th>
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

      <p>My Education </p>

</div>
<div>
<h1>projects</h1>
<p>Slide show of my projects</p>
</div>

<div> 
  <p>Side experiences</p>
</div>




<div> 

</div>
      </main>

     
  )
}


