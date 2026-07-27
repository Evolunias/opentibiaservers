import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-argentina');
}

export default function XanteriaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-argentina" />;
}
