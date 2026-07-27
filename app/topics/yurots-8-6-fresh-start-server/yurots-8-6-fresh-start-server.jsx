import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-fresh-start-server');
}

export default function Yurots86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-fresh-start-server" />;
}
