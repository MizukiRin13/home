import './globals.css'
import Image from "next/image"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
        <h1>Cassia's Library</h1>
        </header>
        <div id="content">
          <div id="sidebar">
                  <div id="avatar">
                      <Image src="/icon.png" alt="my icon!" style={{width: '100%', height: 'auto',}} width={50} /*Not effecting anything*/ height={25} /*Not effecting anything*/ />
                  </div>
                  
                  <div id="bio">
                      <p>hi, i'm cassia~ lately i've been studying web design! i hope you like my website~! ❤︎</p>
                  </div>
                  
                  <nav>
                      <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="#link1">Link 1</a></li>
                      <li><a href="#link2">Link 2</a></li>
                      <li><a href="#link3">Link 3</a></li>
                      <li><a href="#link4">Link 4</a></li>
                      <li><a href="#link5">Link 5</a></li>
                      </ul>
                  </nav>
                  </div> 
        {children}
        </div>
        <footer>© 2024 [your name here!]</footer>
      </body>
    </html>
  );
}
