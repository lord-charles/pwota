export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import SignIn from "../(auth)/signin/page";


export default function Home() {
  return (
    <>
      <SignIn />
      {/* <Features /> */}
    </>
  );
}
