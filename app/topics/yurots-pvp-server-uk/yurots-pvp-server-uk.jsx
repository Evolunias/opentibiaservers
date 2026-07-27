import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-uk');
}

export default function YurotsPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-uk" />;
}
