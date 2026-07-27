import Yurots11RetroServerKeywordPage, { generateMetadata } from './yurots-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11RetroServerKeywordPage />;
}
