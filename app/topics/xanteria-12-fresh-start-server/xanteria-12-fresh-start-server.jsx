import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-fresh-start-server');
}

export default function Xanteria12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-fresh-start-server" />;
}
