import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-non-pvp-server');
}

export default function Yurots80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-non-pvp-server" />;
}
