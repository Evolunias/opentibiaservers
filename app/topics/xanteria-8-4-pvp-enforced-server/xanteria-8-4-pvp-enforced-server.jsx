import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-pvp-enforced-server');
}

export default function Xanteria84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-pvp-enforced-server" />;
}
