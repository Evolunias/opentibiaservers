import ZuneraOtSwedenServersKeywordPage, { generateMetadata } from './zunera-ot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtSwedenServersKeywordPage />;
}
