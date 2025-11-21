import Image from "next/image"
export default function Home(){
   return (    
    <main>
        
        <h1>welcome to my site!</h1>
        <p>this is placeholder text!</p>
        <p>write about yourself and what's on your website! you can say anything!! it's your website!!!! brag about your favorite things idk, just have fun hehe.</p>
        <p>here's an <a href="https://nomnomnami.itch.io/charm-studies" target="_blank">example link</a>. (it goes to the game Cassia is from!)</p>
        
        <h2>section 2</h2>
        <div className="center">
            <Image src="/cassia.png" alt="it's me, cassia!" width={286} height={340} className="center"/>
        </div>
        <p>here's where you can put some other text. very exciting.</p>
        <p>remember to replace the links with pages you want to show people!</p>
        <h4>common pages people make:</h4>
        <ul>
        <li>about</li>
        <li>blog</li>
        <li>gallery</li>
        <li>links in/out</li>
        </ul>
        <p>add whatever makes sense for your site~ link to all your things!!!</p>
        <h2>credits</h2>
        <p>template by <a href="https://nomnomnami.com">NomnomNami</a>!</p>
        <p>i mostly learned css by playing with <a href="https://goblin-heart.net/sadgrl/projects/layout-builder/" target="_blank">sadgrl's layout builder</a> and looking up stuff i didn't know... you can learn too!!! good luck!!!!!!</p>
        <small>last update: 9/15/2024</small>
    </main>
    )
}
