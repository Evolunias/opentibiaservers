import XanteraServerKeywordPage, { generateMetadata } from './xantera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraServerKeywordPage />;
}
