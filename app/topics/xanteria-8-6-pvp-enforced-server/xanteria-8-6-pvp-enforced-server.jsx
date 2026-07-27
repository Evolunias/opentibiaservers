import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-pvp-enforced-server');
}

export default function Xanteria86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-pvp-enforced-server" />;
}
