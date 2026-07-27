import ZuneraOtUsaServerKeywordPage, { generateMetadata } from './zunera-ot-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtUsaServerKeywordPage />;
}
