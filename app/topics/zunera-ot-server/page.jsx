import ZuneraOtServerKeywordPage, { generateMetadata } from './zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtServerKeywordPage />;
}
