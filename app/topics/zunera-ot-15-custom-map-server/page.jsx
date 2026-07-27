import ZuneraOt15CustomMapServerKeywordPage, { generateMetadata } from './zunera-ot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt15CustomMapServerKeywordPage />;
}
