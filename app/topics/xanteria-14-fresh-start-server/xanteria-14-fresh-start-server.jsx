import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-fresh-start-server');
}

export default function Xanteria14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-fresh-start-server" />;
}
