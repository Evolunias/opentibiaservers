import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-uk');
}

export default function YurotsLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-uk" />;
}
