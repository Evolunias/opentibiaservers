import Yurots11EvoServerKeywordPage, { generateMetadata } from './yurots-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11EvoServerKeywordPage />;
}
