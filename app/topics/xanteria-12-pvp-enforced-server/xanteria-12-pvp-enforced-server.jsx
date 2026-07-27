import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-pvp-enforced-server');
}

export default function Xanteria12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-pvp-enforced-server" />;
}
