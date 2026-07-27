import Yurots15EvoServerKeywordPage, { generateMetadata } from './yurots-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15EvoServerKeywordPage />;
}
