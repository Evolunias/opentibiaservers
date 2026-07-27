import ZuneraOtBrazilServersKeywordPage, { generateMetadata } from './zunera-ot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtBrazilServersKeywordPage />;
}
