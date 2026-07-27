import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-pvp-server');
}

export default function Yurots71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-pvp-server" />;
}
