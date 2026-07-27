import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-latin-america');
}

export default function YurotsNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-latin-america" />;
}
