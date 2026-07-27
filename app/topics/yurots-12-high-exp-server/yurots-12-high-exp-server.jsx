import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-high-exp-server');
}

export default function Yurots12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-high-exp-server" />;
}
