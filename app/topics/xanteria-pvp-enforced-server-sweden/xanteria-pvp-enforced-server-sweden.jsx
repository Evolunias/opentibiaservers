import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-sweden');
}

export default function XanteriaPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-sweden" />;
}
