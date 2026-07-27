import XanteriaEuropeServersKeywordPage, { generateMetadata } from './xanteria-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaEuropeServersKeywordPage />;
}
