import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-pvp-enforced-server');
}

export default function Xanteria854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-pvp-enforced-server" />;
}
