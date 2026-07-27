import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-latin-america');
}

export default function XanteriaPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-latin-america" />;
}
