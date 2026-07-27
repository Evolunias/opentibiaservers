import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-brazil');
}

export default function XanteriaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-brazil" />;
}
