import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-baiak-server');
}

export default function Yurots14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-baiak-server" />;
}
