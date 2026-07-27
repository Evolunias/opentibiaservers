import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-canada');
}

export default function YurotsPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-canada" />;
}
