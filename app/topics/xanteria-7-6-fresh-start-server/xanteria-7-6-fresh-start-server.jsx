import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-fresh-start-server');
}

export default function Xanteria76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-fresh-start-server" />;
}
