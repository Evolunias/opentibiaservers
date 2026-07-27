import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-germany');
}

export default function YurotsPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-germany" />;
}
