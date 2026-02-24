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
        <main
          className="
            grid place-items-center
            px-[105px]  /* 25 padding + ~80 arrow */
            pt-[85px]   /* 25 padding + ~60 top bar */
            pb-[25px]
          "
        >
          {children}
        </main>
      </div>
    </section>
  )
}