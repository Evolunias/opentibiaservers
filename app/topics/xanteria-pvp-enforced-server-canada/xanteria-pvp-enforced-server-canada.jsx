import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-enforced-server-canada');
}

export default function XanteriaPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-enforced-server-canada" />;
}
