import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-poland');
}

export default function YurotsPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-poland" />;
}
