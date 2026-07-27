import ZuneraOtEuropeServerKeywordPage, { generateMetadata } from './zunera-ot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtEuropeServerKeywordPage />;
}
