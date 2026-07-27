import Xanteria14EvoServerKeywordPage, { generateMetadata } from './xanteria-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14EvoServerKeywordPage />;
}
