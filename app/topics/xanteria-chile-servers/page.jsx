import XanteriaChileServersKeywordPage, { generateMetadata } from './xanteria-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaChileServersKeywordPage />;
}
