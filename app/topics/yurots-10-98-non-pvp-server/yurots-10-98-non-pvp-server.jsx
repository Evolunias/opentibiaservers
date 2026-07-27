import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-non-pvp-server');
}

export default function Yurots1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-non-pvp-server" />;
}
