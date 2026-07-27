import Xanteria11EvoServerKeywordPage, { generateMetadata } from './xanteria-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11EvoServerKeywordPage />;
}
