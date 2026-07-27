import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-fresh-start-server');
}

export default function Yurots15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-fresh-start-server" />;
}
