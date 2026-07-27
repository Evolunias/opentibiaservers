import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-fresh-start-server');
}

export default function Yurots14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-fresh-start-server" />;
}
