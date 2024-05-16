import React, { useEffect, useState } from 'react'

export default function ldqvUseEffect() {
  // state: count
  const [count, setCount] = useState(0);

  //ham xu ly su kien
  const ldqvhandleclick = ()=>{
    setCount(prev => prev + 1);
  }

  //su kien ham UseEffect de cap nhat lai title, co mot tham so
  useEffect(()=>{
     document.title = 'Le Doan Quoc Van: You clicked ${count} times'
     console.log('You clicked ${count} times');
  });
  //useeffect: tham so thu hai la mang rong
  useEffect(()=>{
    console.log('hay lan dau tien - mot lan', count);
  }, [])

  //[deps]
  useEffect(()=>{
    console.log("UseEffect cont click: {count}")
  }, [count])
  return (
    <div>
      <h2>Demo - useEffect: You cliked {count} times</h2>
      <button onClick={ldqvhandleclick}>
        Click here
      </button>
    </div>
  )
}
