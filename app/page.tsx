import Main from './main';
import FadeInPage from './components/FadeInPage';

export default function Home() {
  return (
    <FadeInPage>
      <main className="flex h-full min-h-dvh py-[12px] sm:py-[25px] px-[12px] sm:px-[25px]">
        <Main />
      </main>
    </FadeInPage>
  );
}
