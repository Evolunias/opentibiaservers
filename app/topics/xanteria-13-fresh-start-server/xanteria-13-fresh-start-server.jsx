import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-fresh-start-server');
}

export default function Xanteria13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-fresh-start-server" />;
}
