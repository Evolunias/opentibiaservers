import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-south-america');
}

export default function YurotsFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-south-america" />;
}
