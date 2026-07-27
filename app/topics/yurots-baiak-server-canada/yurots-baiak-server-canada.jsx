import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-canada');
}

export default function YurotsBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-canada" />;
}
