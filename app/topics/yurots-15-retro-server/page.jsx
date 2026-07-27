import Yurots15RetroServerKeywordPage, { generateMetadata } from './yurots-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15RetroServerKeywordPage />;
}
