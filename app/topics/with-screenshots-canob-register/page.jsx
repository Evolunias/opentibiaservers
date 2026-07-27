import WithScreenshotsCanobRegisterKeywordPage, { generateMetadata } from './with-screenshots-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobRegisterKeywordPage />;
}
