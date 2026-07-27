import WithScreenshotsWikiBrazilKeywordPage, { generateMetadata } from './with-screenshots-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiBrazilKeywordPage />;
}
