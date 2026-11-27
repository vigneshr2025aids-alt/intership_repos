import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const Count = () => {
  const [count, setCount] = useState(0)
  const [isVisible,setIsVisible]=useState(true)
  useEffect(()=>{
    console.log("From useEffect");
  },[])

  return (
    <main className="flex flex-col items-start gap-5 p-6 text-left">
      <p className="text-4xl leading-tight">Count:{count}</p>
      <Button
        size="lg"
        className="h-20 rounded-3xl px-7 text-3xl"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Increase
      </Button>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="destructive"
          size="lg"
          className="h-16 px-6 text-3xl"
          onClick={() => setCount(count-1)}
        >
          Delete
        </Button>
        <Button variant="destructive" size="lg"
          className="h-16 px-6 text-3xl" onClick={()=>setCount(0)}>Reset</Button>
        <Button variant="outline" size="lg" className="h-16 px-6 text-3xl">
          Outline
        </Button>
        <Button variant="secondary" size="lg" className="h-16 px-6 text-3xl">
          secondary
        </Button>
        <Button variant="ghost" size="lg" className="h-16 px-6 text-3xl">
          Ghost
        </Button>
        <Button onClick={()=>setIsVisible(!isVisible)}>TOGGLE</Button>
        {isVisible &&(
            <p>
           Hello User     
            </p>
        )}
      </div>
      <p className="text-4xl leading-tight">This is test</p>
      <p className="text-4xl leading-tight">Students</p>
      <p className="text-4xl leading-tight">I am user and age is 20</p>
    </main>
  )
}

export default Count