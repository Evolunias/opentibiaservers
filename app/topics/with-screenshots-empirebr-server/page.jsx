import WithScreenshotsEmpirebrServerKeywordPage, { generateMetadata } from './with-screenshots-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEmpirebrServerKeywordPage />;
}
