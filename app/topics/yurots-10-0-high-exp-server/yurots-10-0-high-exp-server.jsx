import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-high-exp-server');
}

export default function Yurots100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-high-exp-server" />;
}
