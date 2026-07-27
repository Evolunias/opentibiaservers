import XanteriaCanadaServerKeywordPage, { generateMetadata } from './xanteria-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaCanadaServerKeywordPage />;
}
