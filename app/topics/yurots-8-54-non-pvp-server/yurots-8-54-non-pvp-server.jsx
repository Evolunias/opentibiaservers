import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-54-non-pvp-server');
}

export default function Yurots854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-54-non-pvp-server" />;
}
