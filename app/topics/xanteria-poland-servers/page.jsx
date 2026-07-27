import XanteriaPolandServersKeywordPage, { generateMetadata } from './xanteria-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaPolandServersKeywordPage />;
}
