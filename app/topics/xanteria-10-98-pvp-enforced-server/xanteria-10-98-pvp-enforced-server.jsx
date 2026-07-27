import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-pvp-enforced-server');
}

export default function Xanteria1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-pvp-enforced-server" />;
}
