import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-6-pvp-server');
}

export default function Yurots76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-6-pvp-server" />;
}
