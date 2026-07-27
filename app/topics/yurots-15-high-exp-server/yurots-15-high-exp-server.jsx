import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-high-exp-server');
}

export default function Yurots15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-high-exp-server" />;
}
