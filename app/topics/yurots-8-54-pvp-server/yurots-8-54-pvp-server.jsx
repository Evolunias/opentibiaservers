import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-54-pvp-server');
}

export default function Yurots854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-54-pvp-server" />;
}
