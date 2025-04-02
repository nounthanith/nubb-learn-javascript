const productNames = [
  "Wireless Earbuds",
  "Bluetooth Speaker",
  "Smart Watch",
  "Gaming Mouse",
  "Mechanical Keyboard",
  "LED Monitor",
  "USB-C Charger",
  "Laptop Stand",
  "Fitness Tracker",
  "Portable Power Bank",
  "Noise Cancelling Headphones",
  "Smartphone Gimbal",
  "VR Headset",
  "Digital Drawing Tablet",
  "Action Camera",
  "Mini Projector",
  "Smart Home Hub",
  "Robot Vacuum Cleaner",
  "4K Webcam",
  "Wireless Charging Pad"
];

const productDetails = [
  "Compact and high-quality audio with long battery life.",
  "Crystal clear sound with deep bass and 10-hour playtime.",
  "Track your fitness, heart rate, and notifications on the go.",
  "Ergonomic design with RGB lighting and high precision.",
  "Tactile switches, RGB backlighting, and durable build.",
  "Full HD display with ultra-thin bezels and vivid colors.",
  "Fast charging with multiple port compatibility.",
  "Adjustable, lightweight, and perfect for better posture.",
  "Real-time activity tracking with waterproof design.",
  "Slim and powerful with fast charging capability.",
  "Immersive audio with active noise cancellation.",
  "Stabilize videos for vlogging and content creation.",
  "Immersive 3D experience with adjustable lenses.",
  "Perfect for artists with pressure sensitivity and tilt support.",
  "Capture adventures in 4K with waterproof casing.",
  "Big screen entertainment in your pocket.",
  "Control your smart devices with voice or app.",
  "Cleans your floors automatically with smart mapping.",
  "Sharp video calls with autofocus and stereo mic.",
  "Fast and convenient wireless charging for all devices."
];

const productPrices = [
  "$39.99",   
  "$49.99",   
  "$129.99",  
  "$29.99",   
  "$79.99",   
  "$159.99",  
  "$19.99",   
  "$34.99",   
  "$59.99",  
  "$24.99",   
  "$99.99",   
  "$89.99",   
  "$199.99",  
  "$149.99", 
  "$129.99", 
  "$89.99",   
  "$79.99", 
  "$249.99",  
  "$69.99",   
  "$39.99"   
];

const data = document.getElementById("data")
for(let i = 0; i < productNames.length; i++){
    data.innerHTML += `
    <div class="border-1 w-[280px] hover:scale-105 transition-all shadow-2xl p-5 rounded-lg">
      <div class="">
      <div >
        <img
          class="w-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/560/673/small/modern-laptop-computer-with-blank-screen-on-wood-table-over-blur-bokeh-light-background-photo.jpg"
          alt="Product Image"
        />
      </div>
      <div class="">
        <div class="text-center mt-3 font-bold text-2xl">${productNames[i]}</div>
        <div class="text-sm font-semibold">
          ${productDetails[i]}
        </div>
        <div class="text-red-500 font-bold">${productPrices[i]}</div>
        <button class="btn btn-error text-white btn-sm mt-3 w-full ">Buy Now</button>
      </div>
      </div>
    </div>`
}