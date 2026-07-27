import ZuneraOtFunServerKeywordPage, { generateMetadata } from './zunera-ot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtFunServerKeywordPage />;
}
