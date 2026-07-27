import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-fresh-start-server');
}

export default function Xanteria74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-fresh-start-server" />;
}
