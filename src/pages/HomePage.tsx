import HomeDesktop from './HomeDesktop';
import MobileHome from '../components/mobile/MobileHome';

export default function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <HomeDesktop />
      </div>
      <MobileHome />
    </>
  );
}