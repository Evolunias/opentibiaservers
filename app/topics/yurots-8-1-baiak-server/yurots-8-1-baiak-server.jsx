import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-baiak-server');
}

export default function Yurots81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-baiak-server" />;
}
