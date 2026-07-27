import XanteriaArgentinaServerKeywordPage, { generateMetadata } from './xanteria-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaArgentinaServerKeywordPage />;
}
