import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-germany');
}

export default function YurotsBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-germany" />;
}
