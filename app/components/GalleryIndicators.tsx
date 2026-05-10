export default function GalleryIndicators({
  gallery,
  currentIndex
} : {
  gallery: string[],
  currentIndex: number,
}) {
  return (
    <div className="flex justify-center items-center gap-2 mt-2">
        {gallery.map((_, index) => (
          <p
            key={index}
            className={`
              h-1 
              w-1 
              rounded-full 
              transition-all 
              duration-300 
              ${index === currentIndex
                  ? "bg-black"
                  : "bg-gray-300 opacity-60"
              }
            `}
          />
        ))}
    </div>
  )
}