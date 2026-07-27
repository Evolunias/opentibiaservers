import YurotsVipKeywordPage, { generateMetadata } from './yurots-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsVipKeywordPage />;
}
