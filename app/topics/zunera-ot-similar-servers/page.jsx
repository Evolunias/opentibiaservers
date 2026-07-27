import ZuneraOtSimilarServersKeywordPage, { generateMetadata } from './zunera-ot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtSimilarServersKeywordPage />;
}
