import Main from './main';
import FadeInPage from './components/FadeInPage';

export default function Home() {
  return (
    <FadeInPage>
      <main className="flex h-full min-h-dvh">
        <Main />
      </main>
    </FadeInPage>
  );
}
