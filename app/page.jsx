import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className='w-[90%] max-w-md mx-auto bg-white shadow-2xl
       md:flex md:rounded-2xl md:max-w-4xl'>
        <article className=' bg-gradient-to-b
         from-Light-slate-blue to-Light-royal-blue rounded-b-2xl p-10 text-white text-center
         md:rounded-2xl md:w-1/2 md:grid md:content-center
         '>
          <p className='text-xl font-bold text-Light-lavender'>Your Result</p>
          <div className='w-36 aspect-square bg-gradient-to-b from-Violet-blue 
          to-Persian-blue rounded-full mx-auto my-8 grid content-center
          md:w-56' >
            <p className='text-5xl font-bold mb-2 md:text-7xl'>76</p>
            <p className='font-bold text-Light-lavender'>of 100</p>
          </div>
          <h3 className='text-3xl mb-4 font-bold'>Great</h3>
          <p className='text-light-lavander'>You scored higher than 65% of the people who have
            taken these tests.</p>
        </article>

        <article className='p-10 grid gap-6 md:w-1/2'>
          <h3 className='text-xl font-bold'>Summary</h3>
          <div className='bg-Light-red/5 rounded-xl flex py-5 px-6 items-center'>
            <img src="icon-reaction.svg" alt="icon-reaction" />
            <p className='ml-r text-lg text-Light-red'>Reaction</p>
            <p className='ml-auto font-bold text-Dark-gray-blue'>
              <span>80</span>
              <span className='text-Dark-gray-blue/70'>/ 100</span>
            </p>
          </div>
          <div className='bg-Orangey-yellow/5 rounded-xl flex py-5 px-6 items-center'>
            <img src="icon-memory.svg" alt="icon-memory" />
            <p className='ml-r text-lg text-Orangey-yellow'>Memory</p>
            <p className='ml-auto font-bold text-Dark-gray-blue'>
              <span>92</span>
              <span className='text-Dark-gray-blue/70'>/ 100</span>
            </p>
          </div>
          <div className='bg-Green-teal/5 rounded-xl flex py-5 px-6 items-center'>
            <img src="icon-verbal.svg" alt="icon-verbal" />
            <p className='ml-r text-lg text-Green-teal'>Verbal</p>
            <p className='ml-auto font-bold text-Dark-gray-blue'>
              <span>61</span>
              <span className='text-Dark-gray-blue/70'>/ 100</span>
            </p>
          </div>
          <div className='bg-Cobalt-blue/5 rounded-xl flex py-5 px-6 items-center'>
            <img src="icon-visual.svg" alt="icon-visual" />
            <p className='ml-r text-lg text-Cobalt-blue'>Visual</p>
            <p className='ml-auto font-bold text-Dark-gray-blue'>
              <span>72</span>
              <span className='text-Dark-gray-blue/70'>/ 100</span>
            </p>
          </div>
          <Link className='bg-Dark-gray-blue text-White font-bold rounded-full py-5 text-center 
          hover:bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue ' href="/">
            Continue</Link>
        </article>

      </section>

    </main>
  )
}
