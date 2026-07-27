import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-high-exp-server');
}

export default function Yurots96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-high-exp-server" />;
}
