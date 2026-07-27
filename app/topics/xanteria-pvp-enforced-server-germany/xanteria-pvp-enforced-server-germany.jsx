import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-germany');
}

export default function XanteriaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-germany" />;
}
