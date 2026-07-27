import WithScreenshotsEvoluniaServerKeywordPage, { generateMetadata } from './with-screenshots-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEvoluniaServerKeywordPage />;
}
