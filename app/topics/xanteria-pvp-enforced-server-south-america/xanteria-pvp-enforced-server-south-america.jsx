import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-south-america');
}

export default function XanteriaPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-south-america" />;
}
