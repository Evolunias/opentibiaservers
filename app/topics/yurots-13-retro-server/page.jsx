import Yurots13RetroServerKeywordPage, { generateMetadata } from './yurots-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13RetroServerKeywordPage />;
}
