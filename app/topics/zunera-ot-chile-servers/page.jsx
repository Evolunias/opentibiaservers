import ZuneraOtChileServersKeywordPage, { generateMetadata } from './zunera-ot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtChileServersKeywordPage />;
}
