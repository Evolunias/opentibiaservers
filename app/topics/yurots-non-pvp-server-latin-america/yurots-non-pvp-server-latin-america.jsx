import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-latin-america');
}

export default function YurotsNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-latin-america" />;
}
