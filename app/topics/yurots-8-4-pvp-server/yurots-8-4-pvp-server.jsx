import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-pvp-server');
}

export default function Yurots84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-pvp-server" />;
}
