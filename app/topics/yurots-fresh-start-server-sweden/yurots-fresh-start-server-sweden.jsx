import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-sweden');
}

export default function YurotsFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-sweden" />;
}
