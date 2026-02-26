import WorkFrame from '../components/WorkFrame';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-dvh">
      <div
        className="
          relative min-h-dvh
          grid
          grid-rows-[auto,1fr]
        "
      >
        <WorkFrame />

        {/* CENTER VIEWPORT */}
        <main className="px-[100px] sm:px-[120px] py-[10px] sm:py-[25px]">
          {children}
        </main>
      </div>
    </section>
  )
}