import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-pvp-enforced-server');
}

export default function Xanteria13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-pvp-enforced-server" />;
}
