import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-baiak-server');
}

export default function Yurots84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-baiak-server" />;
}
