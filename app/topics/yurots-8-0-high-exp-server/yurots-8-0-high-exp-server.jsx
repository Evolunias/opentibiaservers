import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-high-exp-server');
}

export default function Yurots80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-high-exp-server" />;
}
