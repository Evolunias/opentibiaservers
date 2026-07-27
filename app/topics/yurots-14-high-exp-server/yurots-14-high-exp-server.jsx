import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-high-exp-server');
}

export default function Yurots14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-high-exp-server" />;
}
