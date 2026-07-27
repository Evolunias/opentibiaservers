import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-vip');
}

export default function YurotsVipKeywordPage() {
  return <StaticKeywordPage slug="yurots-vip" />;
}
