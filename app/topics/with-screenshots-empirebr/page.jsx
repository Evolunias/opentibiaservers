import WithScreenshotsEmpirebrKeywordPage, { generateMetadata } from './with-screenshots-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEmpirebrKeywordPage />;
}
