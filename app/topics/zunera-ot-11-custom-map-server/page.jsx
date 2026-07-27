import ZuneraOt11CustomMapServerKeywordPage, { generateMetadata } from './zunera-ot-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11CustomMapServerKeywordPage />;
}
