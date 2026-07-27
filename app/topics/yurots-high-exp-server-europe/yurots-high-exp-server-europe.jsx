import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-europe');
}

export default function YurotsHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-europe" />;
}
