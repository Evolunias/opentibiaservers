import Yurots15LowExpServerKeywordPage, { generateMetadata } from './yurots-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15LowExpServerKeywordPage />;
}
