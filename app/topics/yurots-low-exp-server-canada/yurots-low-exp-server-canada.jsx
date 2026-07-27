import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-canada');
}

export default function YurotsLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-canada" />;
}
