import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-north-america');
}

export default function XanteriaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-north-america" />;
}
