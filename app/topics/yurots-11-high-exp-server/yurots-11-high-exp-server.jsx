import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-high-exp-server');
}

export default function Yurots11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-high-exp-server" />;
}
