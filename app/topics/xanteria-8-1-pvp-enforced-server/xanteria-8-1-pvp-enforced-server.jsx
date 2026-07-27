import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-pvp-enforced-server');
}

export default function Xanteria81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-pvp-enforced-server" />;
}
