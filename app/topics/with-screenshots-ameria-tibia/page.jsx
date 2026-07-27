import WithScreenshotsAmeriaTibiaKeywordPage, { generateMetadata } from './with-screenshots-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAmeriaTibiaKeywordPage />;
}
