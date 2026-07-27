import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-fresh-start-server');
}

export default function Xanteria1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-fresh-start-server" />;
}
