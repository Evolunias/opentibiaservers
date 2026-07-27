import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-fresh-start-server');
}

export default function Xanteria11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-fresh-start-server" />;
}
