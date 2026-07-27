import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-usa');
}

export default function YurotsLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-usa" />;
}
