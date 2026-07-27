import XanteraWorldKeywordPage, { generateMetadata } from './xantera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraWorldKeywordPage />;
}
