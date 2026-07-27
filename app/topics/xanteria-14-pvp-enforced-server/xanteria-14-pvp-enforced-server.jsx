import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-pvp-enforced-server');
}

export default function Xanteria14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-pvp-enforced-server" />;
}
