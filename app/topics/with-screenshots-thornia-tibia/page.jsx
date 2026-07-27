import WithScreenshotsThorniaTibiaKeywordPage, { generateMetadata } from './with-screenshots-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaTibiaKeywordPage />;
}
