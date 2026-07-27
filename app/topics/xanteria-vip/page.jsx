import XanteriaVipKeywordPage, { generateMetadata } from './xanteria-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaVipKeywordPage />;
}
