import { readFileSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const fontPath = path.join(process.cwd(), 'fonts', 'inconsolata.ttf');

// Load the configuration
path.join(process.cwd(), 'fonts', 'fonts.conf');

const handler = async (req, res) => {
  const demoSVG = `
<svg width="150" height="150" viewBox="0 0 150 150">
  <style type="text/css">
    @font-face {
      font-family: Inconsolata;
      src: url(${fontPath}) format("truetype");
    }
  </style>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect fill="#ffffff" x="0" y="0" width="150" height="150"></rect>
    <text font-family="Inconsolata" font-size="200" font-weight="400" fill="#ff0000">
      <tspan x="50%" y="90%" width="150" text-anchor="middle">V</tspan>
    </text>
  </g>
</svg>`;

  const source = Buffer.from(demoSVG);
  const image = await sharp(source).png().toBuffer();

  res.setHeader('Content-Type', 'image/png');
  res.send(image);
};

export default handler;
