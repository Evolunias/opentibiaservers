import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-latin-america');
}

export default function XanteriaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-latin-america" />;
}
