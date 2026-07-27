import WithScreenshotsTibijkaTibiaKeywordPage, { generateMetadata } from './with-screenshots-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaTibiaKeywordPage />;
}
