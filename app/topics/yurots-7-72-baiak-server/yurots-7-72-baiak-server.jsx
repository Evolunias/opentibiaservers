import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-72-baiak-server');
}

export default function Yurots772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-72-baiak-server" />;
}
