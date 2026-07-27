import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-pvp-enforced-server');
}

export default function Xanteria11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-pvp-enforced-server" />;
}
