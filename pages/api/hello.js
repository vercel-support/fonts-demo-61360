import path from 'path'
import sharp from 'sharp'

let basePath = process.cwd()
if (process.env.NODE_ENV === 'production') basePath = path.join(process.cwd(), '.next/server/chunks')

path.resolve(basePath, 'fonts', 'fonts.conf')
path.resolve(basePath, 'fonts', 'inconsolata.ttf')

const demoSVG = `
<svg width="150" height="150" viewBox="0 0 150 150">
  <style type="text/css">
    @font-face {
      font-family: Inconsolata;
      src: './inconsolata.ttf';
    }
  </style>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect fill="#ffffff" x="0" y="0" width="150" height="150"></rect>
    <text font-family="Inconsolata" font-size="200" font-weight="400" fill="#ff0000">
      <tspan x="50%" y="90%" width="150" text-anchor="middle">V</tspan>
    </text>
  </g>
</svg>`

const handler = async (req, res) => {
  const source = Buffer.from(demoSVG)
  const image = await sharp(source).png().toBuffer()

  res.setHeader('Content-Type', 'image/png')
  res.send(image)
}

export default handler
