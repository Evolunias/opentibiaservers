import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-fresh-start-server');
}

export default function Xanteria71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-fresh-start-server" />;
}
