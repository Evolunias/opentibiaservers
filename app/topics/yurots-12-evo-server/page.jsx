import Yurots12EvoServerKeywordPage, { generateMetadata } from './yurots-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12EvoServerKeywordPage />;
}
