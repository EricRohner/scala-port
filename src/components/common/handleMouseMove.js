const handleMouseMove = (event) => {
  const widthSin = event.clientX / window.innerWidth
  const heightSin = event.clientY / window.innerHeight
  console.log(event.clientX)
  const heightOffset = window.innerHeight / 10 + 75
  const widthOffset = window.innerWidth / 10
  const iw = window.innerWidth / 100
  const ih = window.innerHeight /100

  this.setState({
    x1: Math.sin(widthSin) * iw + widthOffset,
    y1: Math.sin(heightSin) * ih + heightOffset,
    x2: Math.sin(widthSin + 0.78) * iw + widthOffset,
    y2: Math.sin(heightSin + 0.78) * ih + heightOffset,
    x3: Math.sin(widthSin + 1.57) * iw + widthOffset,
    y3: Math.sin(heightSin + 1.57) * ih + heightOffset,
    x4: Math.sin(widthSin + 2.35) * iw * 1.75 + widthOffset,
    y4: Math.sin(heightSin + 2.35) * ih * 1.75 + 75,
  })
}
export default handleMouseMove