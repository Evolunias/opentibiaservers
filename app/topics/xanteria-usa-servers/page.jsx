import XanteriaUsaServersKeywordPage, { generateMetadata } from './xanteria-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaUsaServersKeywordPage />;
}
