
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes that match your App.tsx routes
// Update this array whenever you add new routes to App.tsx
const routesToPrerender = [
  '/', // Index route
  // Add new routes here as you add them to App.tsx
  // Examples:
  // '/about',
  // '/blog',
  // '/blog/post-1',
  // '/contact',
]

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    console.log('Created directory:', dir)
  }
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      // Determine the output file path
      let filePath
      if (url === '/') {
        filePath = toAbsolute('dist/index.html')
      } else {
        // For other routes, create the appropriate file structure
        const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url
        filePath = toAbsolute(`dist${cleanUrl}.html`)
      }

      // Ensure the directory exists before writing the file
      ensureDirectoryExists(filePath)

      // Write the HTML file
      fs.writeFileSync(filePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error)
    }
  }
  
  console.log('Pre-rendering complete!')
})()
