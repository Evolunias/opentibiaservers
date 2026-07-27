import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-baiak-server');
}

export default function Yurots11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-baiak-server" />;
}
