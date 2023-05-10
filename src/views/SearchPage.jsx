
const SearchPage = () =>{
    return(
<div>
<div className="flex flex-col w-full lg:flex-row mt-16 mb-24">
< div className="grid flex-grow h-23 place-items-center">
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://i.pinimg.com/736x/5e/7d/1a/5e7d1a01e56ec6063e7ba7adea8ccc2e.jpg" alt="" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">  12:45</time>
  </div>
  <div className="chat-bubble">Wanna go to Vegas this weekend? 🎰🍾</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>

<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://external-preview.redd.it/Tz6nNKdrp6UlZhO26SIFcl8Tl1aH_eF7YLYK7A7N3RU.jpg?auto=webp&s=a9189138061b013f03beefdc3111d4dc97d97a1a"alt="" />
    </div>
  </div>
  <div className="chat-header">
    Yoda
    <time className="text-xs opacity-50">  12:46</time>
  </div>
  <div className="chat-bubble">A great Fortune I see 🌟</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>

<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://i.pinimg.com/736x/66/25/5c/66255ce9b80364fadf15f743ce53c4db--hayden-christensen-sith-lord.jpg"alt="" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">  12:46</time>
  </div>
  <div className="chat-bubble">I'm in! Lets check Monique's Travel app! ⚫🤖⚔️</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>

        <div className ="mt-20 pb-2 search">
            <form action="">
        <input type="search required" placeholder="Enter City Here!" className="input input-bordered input-secondary max-w-xs pb-1"/>
        <button className="btn btn-secondary ml-2 pt-4 pb-6">Search</button>
        </form>
        </div>
</div>
</div>
</div>


    )
}

export default SearchPage;