import ZuneraOtAlternativesKeywordPage, { generateMetadata } from './zunera-ot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtAlternativesKeywordPage />;
}
