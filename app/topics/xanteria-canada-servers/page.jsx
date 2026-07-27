import XanteriaCanadaServersKeywordPage, { generateMetadata } from './xanteria-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaCanadaServersKeywordPage />;
}
