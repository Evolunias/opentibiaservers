import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-non-pvp-server');
}

export default function Yurots81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-non-pvp-server" />;
}
