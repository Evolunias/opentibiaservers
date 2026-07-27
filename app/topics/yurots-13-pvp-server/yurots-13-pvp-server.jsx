import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-pvp-server');
}

export default function Yurots13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-pvp-server" />;
}
