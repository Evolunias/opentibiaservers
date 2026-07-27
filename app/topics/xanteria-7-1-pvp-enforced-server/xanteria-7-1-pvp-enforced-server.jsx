import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-pvp-enforced-server');
}

export default function Xanteria71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-pvp-enforced-server" />;
}
