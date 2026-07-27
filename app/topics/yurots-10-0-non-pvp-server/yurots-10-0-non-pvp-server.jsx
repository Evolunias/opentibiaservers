import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-non-pvp-server');
}

export default function Yurots100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-non-pvp-server" />;
}
