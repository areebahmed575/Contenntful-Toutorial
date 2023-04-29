
import Image from 'next/image'
import styles from './page.module.css'

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=items`, { cache: 'no-store' });
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function  Home() {
  const get=await getBlogs()
  //console.log(get)
  
  return (
    

    <div className='bg-gray-700 grid grid-cols-4 p-5  gap-5'>
    {get.items.map((item:any)=>(
      <div className='bg-white p-5' key={item.sys.id}>
    {get.includes.Asset.map((elem:any)=>(
      <div key={elem.sys.id}>  
      {item.fields.image.sys.id == elem.sys.id?
      <Image src={"https:"+elem.fields.file.url} width={400} height={400} className='h-64' alt=''/>:<div></div>} 
    </div>  

    ))}
    
      <h1 className='text-3xl font-semibold mt-4'>{item.fields.title}</h1>
    <p className='text-md mt-4'>{item.fields.desc}</p>
      <p className='font-semibold mt-4'>Rs:{item.fields.price}</p>
    </div>


    ))}

      
      {/* <div className='bg-white p-5 '> 
        <Image src={"/men shirt.jpg"} width={400} height={400} alt=''/>
        <h1 className='text-3xl font-semibold mt-4 '>Male Shirt</h1>
        <p className='text-md mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit sunt, nisi eaque sapiente aut possimus delectus nihil alias magni modi minima fugit incidunt. Minima nostrum fugiat ullam sed, reprehenderit adipisci fuga accusantium nesciunt quisquam dolor voluptatum harum deserunt voluptates.</p>
        <p className='font-semibold mt-4'>$ 50.00</p>
      </div>

      <div className='bg-white p-5'>
        <Image src={"/men shirt.jpg"} width={400} height={400} alt=''/>
        <h1 className='text-3xl font-semibold mt-4'>Male Shirt</h1>
        <p className='text-md mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit sunt, nisi eaque sapiente aut possimus delectus nihil alias magni modi minima fugit incidunt. Minima nostrum fugiat ullam sed, reprehenderit adipisci fuga accusantium nesciunt quisquam dolor voluptatum harum deserunt voluptates.</p>
        <p className='font-semibold mt-4'>$ 50.00</p>
      </div>

      <div className='bg-white p-5'>
        <Image src={"/men shirt.jpg"} width={400} height={400} alt=''/>
        <h1 className='text-3xl font-semibold mt-4'>Male Shirt</h1>
        <p className='text-md mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit sunt, nisi eaque sapiente aut possimus delectus nihil alias magni modi minima fugit incidunt. Minima nostrum fugiat ullam sed, reprehenderit adipisci fuga accusantium nesciunt quisquam dolor voluptatum harum deserunt voluptates.</p>
        <p className='font-semibold mt-4'>$ 50.00</p>
      </div>*/}
      
    </div>
    
  )
}
