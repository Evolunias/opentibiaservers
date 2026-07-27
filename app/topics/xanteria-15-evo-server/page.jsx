import Xanteria15EvoServerKeywordPage, { generateMetadata } from './xanteria-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15EvoServerKeywordPage />;
}
