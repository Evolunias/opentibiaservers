import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-latin-america');
}

export default function XanteriaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-latin-america" />;
}
