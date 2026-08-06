function Hero(){
  return(
    <section className="relative w-full h-[600px] bg-black text-white pt-[90px]">
      
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <iframe
          className="w-full h-full object-cover scale-125"
          src="https://www.youtube.com/embed/hwuIKunQBsA?autoplay=1&mute=1&loop=1&playlist=hwuIKunQBsA&controls=0"
          title="Red Star Video"
          allow="autoplay"
        ></iframe>
      </div>

      {/*image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://www.redstarwiremesh.com/maxr.webp"
          alt="Banner background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto h-full flex flex-col justify-center px-6">
        <div className="bg-[#ea6622] text-white text-2xl md:text-4xl font-bold px-4 py-2 w-fit mb-4">
          With high-quality screens
        </div>
        <h1 className="text-3xl md:text-5xl font-bold max-w-[800px]">
          we deliver more value to customers
        </h1>
      </div>

    </section>
  )
}

export default Hero