function FloatingContact(){
  return(
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <div className="w-9 h-9 bg-black text-white rounded flex items-center justify-center text-sm shadow cursor-pointer hover:bg-[#ea6622]" title="WhatsApp">
        💬
      </div>
      <div className="w-9 h-9 bg-black text-white rounded flex items-center justify-center text-sm shadow cursor-pointer hover:bg-[#ea6622]" title="Phone">
        📞
      </div>
      <div className="w-9 h-9 bg-black text-white rounded flex items-center justify-center text-sm shadow cursor-pointer hover:bg-[#ea6622]" title="Email">
        ✉️
      </div>
      <div className="w-9 h-9 bg-black text-white rounded flex items-center justify-center text-xs font-bold shadow cursor-pointer hover:bg-[#ea6622]" title="WeChat">
        WX
      </div>
      <div className="w-9 h-9 bg-black text-white rounded flex items-center justify-center text-sm shadow cursor-pointer hover:bg-[#ea6622]" title="Top">
        ▲
      </div>
    </div>
  )
}

export default FloatingContact
