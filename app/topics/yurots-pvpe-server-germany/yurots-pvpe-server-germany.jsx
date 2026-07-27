import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-germany');
}

export default function YurotsPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-germany" />;
}
