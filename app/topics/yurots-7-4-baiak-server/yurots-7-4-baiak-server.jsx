import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-baiak-server');
}

export default function Yurots74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-baiak-server" />;
}
