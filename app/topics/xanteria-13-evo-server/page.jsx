import Xanteria13EvoServerKeywordPage, { generateMetadata } from './xanteria-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13EvoServerKeywordPage />;
}
