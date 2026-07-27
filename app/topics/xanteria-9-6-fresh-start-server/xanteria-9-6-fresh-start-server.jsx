import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-fresh-start-server');
}

export default function Xanteria96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-fresh-start-server" />;
}
