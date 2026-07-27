import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-europe');
}

export default function YurotsLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-europe" />;
}
