import XanteriaChileServerKeywordPage, { generateMetadata } from './xanteria-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaChileServerKeywordPage />;
}
