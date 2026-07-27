import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-fresh-start-server');
}

export default function Xanteria86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-fresh-start-server" />;
}
