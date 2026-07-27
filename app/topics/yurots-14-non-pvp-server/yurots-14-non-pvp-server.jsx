import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-non-pvp-server');
}

export default function Yurots14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-non-pvp-server" />;
}
