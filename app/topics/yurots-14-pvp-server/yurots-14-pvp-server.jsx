import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-pvp-server');
}

export default function Yurots14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-pvp-server" />;
}
