import React, { useEffect } from 'react';
import './winter-animation.css';

const WinterAnimation = () => {

  useEffect(() => {
    const snowfalldiv = document.getElementById('snowfall')
    const canvas = document.createElement('canvas')

    const pixelRatio = window.devicePixelRatio || 1
    canvas.height = document.documentElement.clientHeight * pixelRatio
    canvas.width = window.innerWidth * pixelRatio

    canvas.style.height = `${document.documentElement.clientHeight}px`
    canvas.style.width = `${window.innerWidth}px`

    snowfalldiv.appendChild(canvas)

    const w = canvas.width
    const h = canvas.height

    const ctx = canvas.getContext('2d')
    ctx.scale(pixelRatio, pixelRatio)
    const flakes = []
    class snowfall {

      static snowFall() {
        snowfall.addFlakes()
        snowfall.addSnow()
      }

      static addFlakes() {
        const x = Math.ceil(Math.random() * w)
        const speed = Math.ceil(Math.random() * 5)
        const radius = 10* Math.PI

        flakes.push({
          x:x,
          y:0,
          speed:speed,
          radius:radius,
        })
      }

      static addSnow() {
        ctx.clearRect(0, 0, w, h)
        for(let i=0;i<flakes.length; i++) {
          let oneFlake = flakes[i]

          ctx.beginPath()
          ctx.fillStyle = "rgba(255,255,255,0.8)"
          ctx.arc(oneFlake.x, oneFlake.y += oneFlake.speed / 2, oneFlake.speed * 0.9, 0, Math.PI * 2);
          ctx.fill()
        }
      }

    }
    const handleResize = () => {
      canvas.height = document.documentElement.clientHeight * pixelRatio
      canvas.width = window.innerWidth * pixelRatio

      canvas.style.height = `${document.documentElement.clientHeight}px`
      canvas.style.width = `${window.innerWidth}px`
    }

    window.addEventListener('resize', handleResize)

    setInterval(() => snowfall.snowFall(), 20)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <div className='snowfall' id='snowfall'></div>
  )
}

export default WinterAnimation;