import { useState, useEffect } from 'react'
import { Dice, DividerDesktop, DividerMobile } from '../public/images/index'

import { FaQuoteLeft } from 'react-icons/fa6'
import axios from 'axios'
import { PacmanLoader } from 'react-spinners'

const URL = 'https://api.adviceslip.com/advice'

export default function App() {
  const [random, setRandom] = useState({
    id: '',
    advice: '',
  })

  const [loading, setLoading] = useState(false)

  const fetchQuote = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(URL, {
        headers: {
          Accept: 'application/json',
        },
      })
      const { advice, id } = data.slip

      console.log(advice, id)

      setRandom({
        id: id,
        advice: advice,
      })

      console.log(setRandom)
    } catch (error) {
      console.log(error.response)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <main className='bg-QDarkBlue-0 min-h-screen flex justify-center sm:items-center items-start pt-24 sm:pt-0'>
      <section className='w-[93%] bg-QDarkGreyishBlue-0 max-w-lg rounded-xl flex flex-col items-center pt-9'>
        <p className='text-QNeonGreen-0 font-extrabold tracking-[0.25em] text-xs mb-5'>
          ADVICE #{random.id}
        </p>

        <div className='sm:px-9 px-8'>
          {loading ? (
            <div className='flex justify-center relative right-6'>
              <PacmanLoader color='hsl(150, 100%, 66%)' />
            </div>
          ) : (
            <p className='text-center text-[27px] font-bold text-QLightCyan-0'>
              <span className='inline-flex w-3 mr-[2px] relative top-[-3px]'>
                <FaQuoteLeft />
              </span>
              {random.advice}
              <span className='inline-flex w-3 relative top-[-3px] rotate-180'>
                <FaQuoteLeft />
              </span>
            </p>
          )}
          <div className='flex flex-col justify-center items-center mt-5 '>
            <img
              className='hidden sm:block'
              src={DividerDesktop}
              alt='divider'
            />
            <img
              className='sm:hidden w-full'
              src={DividerMobile}
              alt='divider'
            />
          </div>

          <div className=' flex justify-center'>
            <button
              onClick={fetchQuote}
              id='shadow'
              className='p-5 bg-QNeonGreen-0 rounded-full relative top-9 '
            >
              <img className='' src={Dice} />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
