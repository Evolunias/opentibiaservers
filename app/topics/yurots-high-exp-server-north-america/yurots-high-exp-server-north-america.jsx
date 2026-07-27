import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-north-america');
}

export default function YurotsHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-north-america" />;
}
