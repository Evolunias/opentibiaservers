import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-non-pvp-server');
}

export default function Yurots74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-non-pvp-server" />;
}
