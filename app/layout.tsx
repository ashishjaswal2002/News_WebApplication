import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News Web App',
  description: 'Get latest news articles included Hindi,English,Sports,Entertainment and much more',
  keywords:'Latest News,News,news,hindi news,english news,sports news',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f172a]  `}>
        <div className='flex '>

        <NavBar/>
        
        {children}
        </div>

      <footer className='p-2 pb-2'>
        <p className=' text-cyan-400 text-center font-light '>Made by Ashish Jaswal. Visit to My Official Portfolio <Link className='text-cyan-200 hover:text-cyan-400 ' href='https://ashishdev.in'>ashishdev.in</Link> </p>
       
      </footer>
      </body>


    </html>
  )
}
