import WithScreenshotsCoxaotTibiaKeywordPage, { generateMetadata } from './with-screenshots-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotTibiaKeywordPage />;
}
