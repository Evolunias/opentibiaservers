import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-latin-america');
}

export default function YurotsLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-latin-america" />;
}
