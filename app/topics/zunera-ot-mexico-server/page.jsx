import ZuneraOtMexicoServerKeywordPage, { generateMetadata } from './zunera-ot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtMexicoServerKeywordPage />;
}
