import ZuneraOtLatinAmericaServerKeywordPage, { generateMetadata } from './zunera-ot-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtLatinAmericaServerKeywordPage />;
}
