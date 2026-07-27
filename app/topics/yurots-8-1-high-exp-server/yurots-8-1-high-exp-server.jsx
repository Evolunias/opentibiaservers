import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-high-exp-server');
}

export default function Yurots81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-high-exp-server" />;
}
