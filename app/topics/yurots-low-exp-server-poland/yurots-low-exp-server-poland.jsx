import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-poland');
}

export default function YurotsLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-poland" />;
}
