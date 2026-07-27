import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-canada');
}

export default function YurotsHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-canada" />;
}
