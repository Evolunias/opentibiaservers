import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-pvp-enforced-server');
}

export default function Xanteria15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-pvp-enforced-server" />;
}
