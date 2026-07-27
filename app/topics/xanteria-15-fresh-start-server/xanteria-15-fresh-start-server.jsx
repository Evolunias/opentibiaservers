import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-fresh-start-server');
}

export default function Xanteria15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-fresh-start-server" />;
}
