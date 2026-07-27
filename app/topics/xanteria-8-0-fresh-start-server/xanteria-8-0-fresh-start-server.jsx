import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-fresh-start-server');
}

export default function Xanteria80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-fresh-start-server" />;
}
