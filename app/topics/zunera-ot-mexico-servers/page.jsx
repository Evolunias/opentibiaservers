import ZuneraOtMexicoServersKeywordPage, { generateMetadata } from './zunera-ot-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtMexicoServersKeywordPage />;
}
