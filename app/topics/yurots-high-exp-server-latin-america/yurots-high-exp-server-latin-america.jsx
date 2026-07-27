import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-latin-america');
}

export default function YurotsHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-latin-america" />;
}
