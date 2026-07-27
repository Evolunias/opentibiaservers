import ZuneraOtEuropeServersKeywordPage, { generateMetadata } from './zunera-ot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtEuropeServersKeywordPage />;
}
