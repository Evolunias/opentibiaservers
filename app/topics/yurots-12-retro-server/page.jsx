import Yurots12RetroServerKeywordPage, { generateMetadata } from './yurots-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12RetroServerKeywordPage />;
}
