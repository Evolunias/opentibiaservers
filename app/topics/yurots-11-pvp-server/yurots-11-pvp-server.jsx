import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-pvp-server');
}

export default function Yurots11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-pvp-server" />;
}
