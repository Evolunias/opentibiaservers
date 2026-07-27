import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-europe');
}

export default function YurotsPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-europe" />;
}
