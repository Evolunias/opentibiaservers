import ZuneraOtUkServerKeywordPage, { generateMetadata } from './zunera-ot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtUkServerKeywordPage />;
}
