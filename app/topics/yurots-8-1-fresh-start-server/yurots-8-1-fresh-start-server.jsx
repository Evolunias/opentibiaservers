import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-fresh-start-server');
}

export default function Yurots81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-fresh-start-server" />;
}
