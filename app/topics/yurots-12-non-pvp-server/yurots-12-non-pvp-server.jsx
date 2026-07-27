import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-non-pvp-server');
}

export default function Yurots12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-non-pvp-server" />;
}
