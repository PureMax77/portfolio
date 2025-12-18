import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Portfolio | Senior Frontend Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #0ea5e9, #0284c7)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 40 }}>Senior Frontend Developer</div>
        <div
          style={{
            fontSize: 28,
            marginTop: 40,
            display: 'flex',
            gap: 20,
          }}
        >
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

