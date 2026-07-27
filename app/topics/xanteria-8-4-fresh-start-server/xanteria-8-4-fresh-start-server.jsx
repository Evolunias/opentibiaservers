import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-fresh-start-server');
}

export default function Xanteria84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-fresh-start-server" />;
}
