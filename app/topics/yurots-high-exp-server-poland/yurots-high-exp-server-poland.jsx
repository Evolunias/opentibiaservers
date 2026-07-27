import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-poland');
}

export default function YurotsHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-poland" />;
}
