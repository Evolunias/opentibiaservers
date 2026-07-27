import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-north-america');
}

export default function XanteriaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-north-america" />;
}
