function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="w-full bg-black flex justify-center items-center py-2 text-white text-[12px] border-t border-Grey text-center">
      © {currentYear} Paolo Star.
      <br className="sm:hidden" />
      <span className="md:inline hidden">&nbsp;</span>
      All rights reserved.
    </div>
  )
}

export default Footer
