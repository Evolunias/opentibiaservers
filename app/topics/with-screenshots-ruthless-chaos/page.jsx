import WithScreenshotsRuthlessChaosKeywordPage, { generateMetadata } from './with-screenshots-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRuthlessChaosKeywordPage />;
}
