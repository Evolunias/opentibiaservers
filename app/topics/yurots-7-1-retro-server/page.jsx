import Yurots71RetroServerKeywordPage, { generateMetadata } from './yurots-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots71RetroServerKeywordPage />;
}
