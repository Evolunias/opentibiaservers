import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-72-non-pvp-server');
}

export default function Yurots772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-72-non-pvp-server" />;
}
