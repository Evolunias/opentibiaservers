import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-pvp-enforced-server');
}

export default function Xanteria96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-pvp-enforced-server" />;
}
