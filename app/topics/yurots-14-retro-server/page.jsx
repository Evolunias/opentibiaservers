import Yurots14RetroServerKeywordPage, { generateMetadata } from './yurots-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14RetroServerKeywordPage />;
}
