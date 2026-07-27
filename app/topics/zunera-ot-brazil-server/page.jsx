import ZuneraOtBrazilServerKeywordPage, { generateMetadata } from './zunera-ot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtBrazilServerKeywordPage />;
}
