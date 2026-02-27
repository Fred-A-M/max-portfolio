import WorkFrame from '../components/WorkFrame';
import FadeInPage from '../components/FadeInPage';

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FadeInPage>
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
          <main className="px-[100px] sm:px-[120px] py-[12px]">
            {children}
          </main>
        </div>
      </section>
    </FadeInPage>
  )
}