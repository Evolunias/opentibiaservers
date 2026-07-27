import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-mexico');
}

export default function XanteriaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-mexico" />;
}
