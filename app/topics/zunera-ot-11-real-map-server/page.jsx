import ZuneraOt11RealMapServerKeywordPage, { generateMetadata } from './zunera-ot-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11RealMapServerKeywordPage />;
}
