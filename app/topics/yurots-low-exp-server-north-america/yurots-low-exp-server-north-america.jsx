import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-north-america');
}

export default function YurotsLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-north-america" />;
}
