import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-brazil');
}

export default function YurotsPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-brazil" />;
}
