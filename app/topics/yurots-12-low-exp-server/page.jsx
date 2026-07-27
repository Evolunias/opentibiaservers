import Yurots12LowExpServerKeywordPage, { generateMetadata } from './yurots-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12LowExpServerKeywordPage />;
}
