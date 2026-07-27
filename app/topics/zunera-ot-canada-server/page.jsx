import ZuneraOtCanadaServerKeywordPage, { generateMetadata } from './zunera-ot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtCanadaServerKeywordPage />;
}
