import WorkNav from '../components/WorkNav';

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="work-layout">
      <div className="project-view flex h-full min-h-dvh py-[25px] px-[25px]">
        <WorkNav/>
        {children}
      </div>
    </section>
  )
}